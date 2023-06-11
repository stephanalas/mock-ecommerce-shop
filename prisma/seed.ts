import { Prisma, PrismaClient } from '../generated/client/deno/edge.ts';
import { config } from 'https://deno.land/std@0.163.0/dotenv/mod.ts';
import { faker } from 'faker';
const envVars = await config();

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: envVars.DATABASE_URL,
		},
	},
});

async function init() {
	const users: Prisma.UserCreateInput[] = [{
		username: 'testUser',
		email: 'test@user.com',
		password: 'test123',
	}];
}

/**
 * Seed the database.
 */

// create user

// create products

// for (const u of dinosaurData) {
//   const dinosaur = await prisma.dinosaur.create({
//     data: u,
//   })
//   console.log(`Created dinosaur with id: ${dinosaur.id}`)
// }
console.log(`Seeding finished.`);

await prisma.$disconnect();
