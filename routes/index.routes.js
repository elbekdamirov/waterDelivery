const { Router } = require("express");
const userRoute = require("./user.routes");
const addressRoute = require("./address.routes");
const phoneRoute = require("./phone.routes");

let router = Router();

router.use("/users", userRoute);
router.use("/address", addressRoute);
router.use("/phone", phoneRoute);

module.exports = router;
