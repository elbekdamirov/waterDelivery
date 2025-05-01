const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/order.controller");

let orderRoute = Router();

orderRoute.get("/", findAll);
orderRoute.post("/", create);
orderRoute.get("/:id", findOne);
orderRoute.patch("/:id", update);
orderRoute.delete("/:id", remove);

module.exports = orderRoute;
