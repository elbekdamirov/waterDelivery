const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
  getOrderByDate,
  getLastOrders,
} = require("../controllers/order.controller");

let orderRoute = Router();

orderRoute.get("/", findAll);
orderRoute.post("/", create);
orderRoute.patch("/get-by-date", getOrderByDate);
orderRoute.patch("/get-last-orders", getLastOrders);
orderRoute.get("/:id", findOne);
orderRoute.patch("/:id", update);
orderRoute.delete("/:id", remove);

module.exports = orderRoute;
