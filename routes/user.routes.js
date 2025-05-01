const { Router } = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/user.controller");

let userRoute = Router();

userRoute.get("/", findAll);
userRoute.post("/", create);
userRoute.get("/:id", findOne);
userRoute.patch("/:id", update);
userRoute.delete("/:id", remove);

module.exports = userRoute;
