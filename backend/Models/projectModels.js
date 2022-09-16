const mongoose = require("mongoose");

const projectsSchame = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Lütfen Proje Adı Giriniz"],
    trim: true,
  },
  stock: {
    type: Number,
    required: [true, "Lütfen Adet Sayısını Giriniz"],
    maxLength: [8, "Adet 8 Karakterden Büyük Giremezsin"],
  },
  blockchain: {
    type: String,
    required: [true, "Lütfen Blockchain Giriniz"],
  },
  url: { type: String, required: [true, "Lütfen Bir Url Giriniz"] },
  type: { type: String },
  accept: {
    type: String,
    default: "onaysız",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Projects", projectsSchame);
