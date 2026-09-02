import express from "express";
import { prisma } from "./db.js";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/test-route", async (req, res) => {
  const data = await prisma.jobApplication.findMany();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});