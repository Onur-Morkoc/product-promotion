const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const Product = require("../Models/projectModels");
const ApiFeatures = require("../Utils/apiFeatures");
const ErrorHander = require("../Utils/ErrorHandler");
const { encode, decode } = require("node-base64-image");
const moment = require('moment');
require("moment-duration-format");
moment.locale("tr");


exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const projects = await Product.find();

  res.status(200).json({
    success: true,
    projects,
  });
});

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  let project = await Product.findOne({ name: req.body.name });

  if (project) return next(new ErrorHander("Bu Proje Zaten Var", 404));

  let name = req.body.name;
  let stock = req.body.stock;
  let blockchain = req.body.blockchain;
  let url = req.body.link;
  let images = req.body.avatar;
  let user = req.user.id;
  let type = req.body.type;


  project = await Product.create({
    name,
    stock,
    blockchain,
    url,
    images,
    user,
    type,
    createdAt: moment().add(3, "days").format("DD.MM.YYYY HH:mm:ss")
  });

  if (!images.length) {
    await decode(images.split(",")[1],
      { fname: `${__dirname.replace("\\backend", "").replace("\\Controllers", "")}\\frontend\\src\\card-images\\${name}-${type}`, ext: type });

  }

  res.status(201).json({
    success: true,
    project,
  });

});

// All Products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 3;

  const projectsCount = await Product.countDocuments();

  const apiFeatures = new ApiFeatures(Product.find({}), req.query)
    .search()
    .filter();

  const projects = await apiFeatures.query;

  let filteredProductsCount = projects.length;

  apiFeatures.pagination(resultPerPage);

  res.status(200).json({
    success: true,
    projects,
    projectsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const project = await Product.findById(req.params.id);

  if (!project) return next(new ErrorHander("Product Not Found", 404));

  res.status(200).json({
    success: true,
    project,
  });
});

// Update Product -- Admin
exports.UpdateProduct = catchAsyncErrors(async (req, res, next) => {
  let project = await Product.findById(req.params.id);

  if (!project) {
    return next(new ErrorHander("Product not found", 404));
  }

  let name = req.body.name;
  let stock = req.body.stock;
  let blockchain = req.body.blockchain;
  let url = req.body.link;
  let images = req.body.avatar;
  let user = req.user.id;
  let type = req.body.type;

  if (images?.length) {
    await decode(images.split(",")[1],
      { fname: `${__dirname.replace("\\backend", "").replace("\\Controllers", "")}\\frontend\\src\\card-images\\${name}-${type}`, ext: type });

  }

  let update = { name, stock, blockchain, url, images, user, type }

  if (req.body.accept) {
    update = { accept: req.body.accept }
  }

  project = await Product.findByIdAndUpdate(req.params.id, update, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    project,
  });
});

// Delete Product -- Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const project = await Product.findById(req.params.id);

  if (!project) {
    return next(new ErrorHander("Product not found", 404));
  }

  await project.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});
