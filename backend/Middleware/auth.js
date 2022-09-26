const catchAsyncErrors = require("../Middleware/catchAsyncErrors")
const ErrorHander = require("../Utils/ErrorHandler")
const jwt = require("jsonwebtoken")
const User = require("../Models/userModel")

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) return next(new ErrorHander("Bu Sayfaya Erişmek İçin Lütfen Giriş Yapın", 401))

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodedData.id)
   
    next()

})

exports.authorizeRoles = (...roles) => {
    return async (req, res, next) => {

        if(!roles.includes(req.user.role)) return next(new ErrorHander(`Rol: ${req.user.role} Bu Sayfaya Erişim İzni Yok`, 403))

        next()
    }
}