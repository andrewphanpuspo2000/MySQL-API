import express from "express";

const app = express();
const Port = 8000;

app.use(express.json());
import { createTable } from "./Schema/DbSchema.js";

import router from "./router/router.js";

app.use("/api/mysql", router);
// createTable();
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "connected",
  });
});
app.listen(Port, (err) => {
  err
    ? console.log(err.message)
    : console.log(`server running in port ${Port}`);
});
