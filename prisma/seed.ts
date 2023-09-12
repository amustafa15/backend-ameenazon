// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const user1 = await prisma.user.upsert({
    where: { email: 'markdavidchapman@gmail.com' },
    update: {},
    create: {
      email: 'markdavidchapman@gmail.com',
      name: 'Mark David Chapman',
      address:
        "1600 pennsylvania ave",
      phoneNumber: "911",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "tedbundy2@gmail.com" },
    update: {},
    create: {
      email: "tedbundy2@gmail.com",
      name: 'tedward bundy',
      address:
        'adx florence',
      phoneNumber: "999",
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
