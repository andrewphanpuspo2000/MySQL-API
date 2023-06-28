import express from "express";
import { inputData } from "../Schema/DbSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  const input = inputData(name, age);

  input
    ? res.send("data: " + input + "data is inputted")
    : res.send("data is fail to input");
});

export default router;
