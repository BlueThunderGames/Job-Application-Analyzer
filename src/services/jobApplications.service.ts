import { prisma } from "../db.js";

export async function createJobApplication(data: {
  position: string;
  company: string;
  status: "APPLIED" | "INTERVIEWING" | "OFFER" | "REJECTED";
}) {
  return prisma.jobApplication.create({ data });
}

export async function getAllJobApplications() {
  return prisma.jobApplication.findMany();
}

export async function getJobApplicationById(id: number) {
  return prisma.jobApplication.findUnique({ where: { id } });
}