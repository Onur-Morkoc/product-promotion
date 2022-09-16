const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const User = require("../Models/userModel");
const ErrorHander = require("../Utils/ErrorHandler");
const sendToken = require("../Utils/jwtToken");

// Register User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  res.status(200).json({
    success: true,
    user,
  });
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHander("Lütfen E-posta Ve Şifre Giriniz", 400));

  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHander("Geçersiz E-posta Veya Şifre", 400));

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched)
    return next(new ErrorHander("Geçersiz E-posta veya Şifre", 400));

  sendToken(user, 201, res);
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// All Users -- Admin
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
  });
});

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findById(req.user.id)

  if (!user) return next(new ErrorHander("User Not Found", 500))

  res.status(200).json({
      success: true,
      user
  })

})

// Single User -- Admin
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHander(`User Does Not Exist With Id: ${req.params.id}`, 500)
    );

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User -- Admin
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({_id:req.params.id}).select("+password");

  if (!user) return next(new ErrorHander("Kullanıcı Bulunamadı", 500));

  const { name, email, role, newPassword } = req.body;

  if (name) user.name = req.body.name;
  if (email) user.email = req.body.email;
  if (role) user.role = req.body.role;
  if (newPassword) user.password = req.body.newPassword;

  console.log( req.body)

  if (name || email || role || newPassword) await user.save();

  res.status(200).json({
    success: true,
    message: "User Updated Successfully",
  });
});

// Delete User -- Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`Kullanıcı Şu Kimliğe Sahip Değil: ${req.params.id}`, 400)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
