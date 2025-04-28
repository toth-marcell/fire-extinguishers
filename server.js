import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Extinguisher, Inspector } from "./models.js";

const app = express();
app.use(express.json());

function APIError(res, msg) {
  res.status(400).json({ msg: msg });
}

app.get("/extinguishers", async (req, res) => {
  res.json(await Extinguisher.findAll());
});

app.post("/extinguishers", async (req, res) => {
  const { materialType, type, capacity, manufactured } = req.body;
  if (!(materialType && type && capacity && manufactured)) {
    APIError(res, "Missing fields");
    return;
  }
  const newExtinguisher = await Extinguisher.create({
    materialType: materialType,
    type: type,
    capacity: capacity,
    manufactured: manufactured,
  });
  res.status(201).json(newExtinguisher);
});

app.put("/extinguishers", async (req, res) => {
  const { id, inspected } = req.body;
  const extinguisher = await Extinguisher.findByPk(id);
  if (!extinguisher) {
    APIError(res, "No extinguisher with this id");
    return;
  }
  await extinguisher.update({ inspected: inspected });
  res.json(extinguisher);
});

app.delete("/extinguishers", async (req, res) => {
  const { id } = req.query;
  const extinguisher = await Extinguisher.findByPk(id);
  if (!extinguisher) {
    APIError(res, "No extinguisher with this id");
    return;
  }
  await extinguisher.destroy();
  res.end();
});

const port = process.env["PORT"] || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
