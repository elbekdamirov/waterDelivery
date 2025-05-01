const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/deliver.controller");

let deliverRoute = Router();

deliverRoute.get("/", findAll);
deliverRoute.post("/", create);
deliverRoute.get("/:id", findOne);
deliverRoute.patch("/:id", update);
deliverRoute.delete("/:id", remove);

module.exports = deliverRoute;
