import { Router } from "express";
import { createJobApplicationHandler } from "../controllers/jobApplications.controller.js";

const router = Router();

router.post("/", createJobApplicationHandler);

export default router;