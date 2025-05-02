const { Router } = require("express");
const userRoute = require("./user.routes");
const addressRoute = require("./address.routes");
const phoneRoute = require("./phone.routes");
const orderRoute = require("./order.routes");
const deliverRoute = require("./deliver.routes");
const paymentRoute = require("./payment.routes");

let router = Router();

router.use("/users", userRoute);
router.use("/address", addressRoute);
router.use("/phone", phoneRoute);
router.use("/order", orderRoute);
router.use("/deliver", deliverRoute);
router.use("/payment", paymentRoute);

module.exports = router;
