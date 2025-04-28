import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Extinguisher, Inspector } from "./models.js";

const app = express();
app.use(express.json());

app.get("/extinguishers", async (req, res) => {
  res.json(await Extinguisher.findAll());
});

app.post("/extinguishers", async (req, res) => {
  const newExtinguisher = await Extinguisher.create(req.body);
  res.json(newExtinguisher);
});

app.put("/extinguishers", async (req, res) => {
  const { id, inspected } = req.body;
  const extinguisher = await Extinguisher.findByPk(id);
  await extinguisher.update({ inspected: inspected });
  res.json(extinguisher);
});

app.delete("/extinguishers", async (req, res) => {
  const { id } = req.query;
  const extinguisher = await Extinguisher.findByPk(id);
  await extinguisher.destroy();
  res.end();
});

const port = process.env["PORT"] || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
