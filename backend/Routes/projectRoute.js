const express = require("express");
const {
  getAllProducts,
  createProduct,
  UpdateProduct,
  deleteProduct,
  getProductDetails
} = require("../Controllers/projectController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/auth");

const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-')  + file.originalname);
  },
});

const upload = multer({
  storage: storage
});



router.route("/admin/projects").get(getAllProducts);

router
  .route("/admin/project/new")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), createProduct);
 
router
  .route("/admin/project/:id")
  .get(isAuthenticatedUser, authorizeRoles("Admin"), getProductDetails)
  .put(isAuthenticatedUser, authorizeRoles("Admin"), UpdateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteProduct);


module.exports = router;
