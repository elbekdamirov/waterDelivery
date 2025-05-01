const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/phone.controller");

let phoneRoute = Router();

phoneRoute.get("/", findAll);
phoneRoute.post("/", create);
phoneRoute.get("/:id", findOne);
phoneRoute.patch("/:id", update);
phoneRoute.delete("/:id", remove);

module.exports = phoneRoute;