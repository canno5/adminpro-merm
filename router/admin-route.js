const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin-conroller");
const authMiddleware = require("../middlewares/auth_middleware");
const adminMiddleware = require("../middlewares/admin-middleware");


router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUser);

router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById)


router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById)


router.route("/contact").get(authMiddleware, adminMiddleware, adminController.getAllContats);


router.route("/contact/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContatsById);

router.route("/contact/:id").get(authMiddleware, adminMiddleware, adminController.getContactById);

router.route("/contact/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateContactById)




module.exports = router