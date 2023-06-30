import express from "express";
import { getData, inputData } from "../Schema/DbSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  const input = await inputData(name, age);

  input
    ? res.send("data: " + input + "data is inputted")
    : res.send("data is fail to input");
});

router.get("/", async (req, res) => {
  const result = await getData();

  result
    ? res.json({
        status: "success",
        message: result[0],
      })
    : console.log("fail");
});

export default router;
