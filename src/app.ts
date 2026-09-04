import express from "express";
import jobApplicationsRouter from "./routes/jobApplications.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/job-applications", jobApplicationsRouter);

export default app;