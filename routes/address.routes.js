const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/address.controller");

let addressRoute = Router();

addressRoute.get("/", findAll);
addressRoute.post("/", create);
addressRoute.get("/:id", findOne);
addressRoute.patch("/:id", update);
addressRoute.delete("/:id", remove);

module.exports = addressRoute;
