const express = require("express");
const service = require("../controller/service-conroller");
// const app = express();
const router = express.Router();


// router.get("/service", services);
router.route("/service").get(service.services);
router.route("/admin/service").post(service.servicesData);
// router.route("/service").post(services);


module.exports = router;