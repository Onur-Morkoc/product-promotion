const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Lütfen Bir İsim Giriniz"],
        maxLength: [32, "İsim 32 Karakterden Fazla Olamaz"],
        minLength: [3, "İsim 3 Karakterden Az Olamaz"]
    },
    email: {
        type: String,
        required: [true, "Lütfen Bir Mail Giriniz"],
        unique: true,
        validate: [validator.isEmail, "Lütfen Maili Doğru Giriniz"]
    },
    password: {
        type: String,
        required: [true, "Lütfen Bir Şifre Giriniz"],
        minLength: [8, "Şifre 8 Karakterden Az Olamaz"],
        select: false
    },
    role: {
        type: String,
        default: "User"
    }
})

// Bcrypt hash
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next()

    this.password = await bcrypt.hash(this.password, 10)
})

// JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Password Reset Token
userSchema.methods.getResetPasswordToken = function () {

    const resetToken = crypto.randomBytes(20).toString("hex")

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000

    return resetToken

}

module.exports = mongoose.model("User", userSchema)

