import type { Request, Response } from "express";
import { createJobApplicationSchema } from "../validators/jobApplications.validator.js";
import { createJobApplication, getAllJobApplications, getJobApplicationById } from "../services/jobApplications.service.js";

export async function getAllJobApplicationsHandler(req: Request, res: Response) {
  const jobApplications = await getAllJobApplications();
  res.json(jobApplications);
}

export async function createJobApplicationHandler(req: Request, res: Response) {
  const result = createJobApplicationSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ errors: result.error.issues });
    return;
  }

  const jobApplication = await createJobApplication(result.data);
  res.status(201).json(jobApplication);
}

export async function getJobApplicationByIdHandler(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const jobApplication = await getJobApplicationById(id);
  if (!jobApplication) {
    res.status(404).json({ error: "Job application not found" });
    return;
  }
  res.json(jobApplication);
}