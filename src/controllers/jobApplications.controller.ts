import type { Request, Response } from "express";
import { createJobApplicationSchema } from "../validators/jobApplications.validator.js";
import { createJobApplication } from "../services/jobApplications.service.js";

export async function createJobApplicationHandler(req: Request, res: Response) {
  const result = createJobApplicationSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ errors: result.error.issues });
    return;
  }

  const jobApplication = await createJobApplication(result.data);
  res.status(201).json(jobApplication);
}