const express = require("express")
const { registerUser, loginUser, logout, getAllUsers, getSingleUser, deleteUser, updateUser, getUserDetails } = require("../Controllers/userController")
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/auth")

const router = express.Router()

router.route("/admin/user/new").post(registerUser)

router.route("/admin/login").post(loginUser)

router.route("/admin/logout").get(logout)

router.route("/admin/me").get(isAuthenticatedUser,getUserDetails)

router.route("/admin/users").get(isAuthenticatedUser, getAllUsers)

router.route("/admin/user/:id")
.get(isAuthenticatedUser, authorizeRoles("Admin"), getSingleUser)
.put(isAuthenticatedUser, authorizeRoles("Admin"), updateUser)
.delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteUser)

module.exports = router
