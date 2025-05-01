const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/payment.controller");

let paymentRoute = Router();

paymentRoute.get("/", findAll);
paymentRoute.post("/", create);
paymentRoute.get("/:id", findOne);
paymentRoute.patch("/:id", update);
paymentRoute.delete("/:id", remove);

module.exports = paymentRoute;
