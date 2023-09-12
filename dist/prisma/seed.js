"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user1 = await prisma.user.upsert({
        where: { email: 'markdavidchapman@gmail.com' },
        update: {},
        create: {
            email: 'markdavidchapman@gmail.com',
            name: 'Mark David Chapman',
            address: "1600 pennsylvania ave",
            phoneNumber: "911",
        },
    });
    const user2 = await prisma.user.upsert({
        where: { email: "tedbundy2@gmail.com" },
        update: {},
        create: {
            email: "tedbundy2@gmail.com",
            name: 'tedward bundy',
            address: 'adx florence',
            phoneNumber: "999",
        },
    });
    console.log({ user1, user2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map