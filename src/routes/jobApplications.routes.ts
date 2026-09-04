import { Router } from "express";
import { createJobApplicationHandler, getAllJobApplicationsHandler, getJobApplicationByIdHandler } from "../controllers/jobApplications.controller.js";

const router = Router();

router.post("/", createJobApplicationHandler);
router.get("/", getAllJobApplicationsHandler);
router.get("/:id", getJobApplicationByIdHandler);

export default router;