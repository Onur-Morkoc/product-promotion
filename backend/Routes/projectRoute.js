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


router.route("/admin/projects").get(getAllProducts);

router
  .route("/admin/project/new")
  .post(isAuthenticatedUser, authorizeRoles("Yetkili","Admin"), createProduct);
 
router
  .route("/admin/project/:id")
  .get(isAuthenticatedUser, authorizeRoles("Yetkili","Admin"), getProductDetails)
  .put(isAuthenticatedUser, authorizeRoles("Yetkili","Admin"), UpdateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteProduct);


module.exports = router;
