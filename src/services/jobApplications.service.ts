import { prisma } from "../db.js";

export async function createJobApplication(data: {
  position: string;
  company: string;
  status: "APPLIED" | "INTERVIEWING" | "OFFER" | "REJECTED";
}) {
  return prisma.jobApplication.create({ data });
}