import { prisma } from "@/lib/prisma";

export async function resetDatabaseForTests() {
	await prisma.$transaction([
		prisma.user.deleteMany(),
		prisma.note.deleteMany(),
		prisma.event.deleteMany(),
	]);
}
