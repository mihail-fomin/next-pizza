import { prisma } from "./index";
import {hashSync} from 'bcrypt'

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullname: 'User Test',
                email: 'test@prisma.ru',
                verified: new Date(),
                password: hashSync('123', 10),
                role: 'USER',
            },
            {
                fullname: 'Admin Admin',
                email: 'test1@prisma.ru',
                verified: new Date(),
                password: hashSync('123', 10),
                role: 'ADMIN',
            },
        ]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.error(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    })