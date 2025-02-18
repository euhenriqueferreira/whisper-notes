import { resetDatabaseForTests } from "@/app/utils/setupTestsDB";
import { prisma } from "@/lib/prisma";
import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await resetDatabaseForTests();
	await page.goto("http://localhost:3000/login");
});

test("The Login Form fields should be rendered", async ({ page }) => {
	await expect(
		page.getByRole("textbox", { name: "Seu e-mail" }),
	).toBeVisible();
	await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
	await expect(
		page.getByRole("link", { name: "Ainda não tem uma conta?" }),
	).toBeVisible();
});

test("Email should be required", async ({ page }) => {
	await page.getByRole("button", { name: "Entrar" }).click();

	expect(page.getByText("O e-mail deve ter pelo menos")).toBeVisible();
});

test("The email shoud be and email", async ({ page }) => {
	await page.fill("input#email", "emailinvalido");
	await page.getByRole("button", { name: "Entrar" }).click();

	expect(
		page.locator("text=O valor deve ser um e-mail válido."),
	).toBeVisible();
});

test("If the email is valid, shoud submit the form", async ({ page }) => {
	await prisma.user.create({
		data: {
			name: "Quinho",
			email: "quinhopereira.dev@gmail.com",
		},
	});

	await page.fill("input#email", "quinhopereira.dev@gmail.com");
	await page.getByRole("button", { name: "Entrar" }).click();

	await expect(
		page.getByText("Um link de autenticação foi enviado para o seu e-mail"),
	).toBeVisible();
});

test("If the requisition fails, should render a error toast", async ({
	page,
}) => {
	await page.route("/auth/login", (route) => route.abort());

	await page.fill("input#email", "erro@example.com");
	await page.click('button:has-text("Entrar")');

	await expect(page.getByText("Não foi possível fazer login.")).toBeVisible();
});

test("If the user do not have an account, the link should ref Login Page", async ({
	page,
}) => {
	await page.getByRole("link", { name: "Ainda não tem uma conta?" }).click();

	await expect(page).toHaveURL("http://localhost:3000/register");
});
