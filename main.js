const express = require("express");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index.routes");

dotenv.config();

let PORT = process.env.PORT || 4000;

let app = express();

app.use(express.json());

app.use("/api", mainRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
