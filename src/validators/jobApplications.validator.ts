import { z } from "zod";

const createJobApplicationSchema = z.object({
  position: z.string(),
  company: z.string(),
  status: z.enum(["APPLIED", "INTERVIEWING", "OFFER", "REJECTED"]),
});

export { createJobApplicationSchema };