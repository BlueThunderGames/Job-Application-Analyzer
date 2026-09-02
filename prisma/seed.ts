import { prisma } from "../src/db.js";
import { ApplicationStatus } from "../src/generated/prisma/client.js";


async function main() {
  // your create() calls go here

  // Job Application Seed
  const jobApplication = await prisma.jobApplication.create({
    data: {
        position: "Seed Position",
        company: "Seed Company",
        status: ApplicationStatus.APPLIED,
    }
  })

  console.log("Seeded Job Application:", jobApplication);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });