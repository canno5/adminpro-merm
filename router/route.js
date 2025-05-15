const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
const {signupSchema, signInSchema, contactSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const contact = require("../controller/contact-controller");
const authMiddleware = require("../middlewares/auth_middleware")
router.route("/").get(authController.home);

router.route("/contact").post(validate(contactSchema), contact);
router.route("/register").post(validate(signupSchema), authController.register);
router.route("/user").get(authMiddleware, authController.user);
router.route("/login").post(validate(signInSchema), authController.login);

module.exports = router;