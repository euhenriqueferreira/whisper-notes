import { resetDatabaseForTests } from "@/app/utils/setupTestsDB";
import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await resetDatabaseForTests();
	await page.goto("http://localhost:3000/register");
});

test("The Register Form fields should be rendered", async ({ page }) => {
	await expect(page.getByRole("textbox", { name: "Seu nome" })).toBeVisible();
	await expect(
		page.getByRole("textbox", { name: "Seu e-mail" }),
	).toBeVisible();
	await expect(
		page.getByRole("button", { name: "Criar conta" }),
	).toBeVisible();
	await expect(
		page.getByRole("link", { name: "Já tem uma conta? Fazer login" }),
	).toBeVisible();
});

test("Email and name should be required", async ({ page }) => {
	await page.getByRole("button", { name: "Criar conta" }).click();

	expect(page.getByText("O e-mail deve ter pelo menos")).toBeVisible();
	expect(page.getByText("O nome deve ter pelo menos 2")).toBeVisible();
});

test("The name shoud have a minimum of 2 characters", async ({ page }) => {
	await page.fill("input#name", "o");
	await page.getByRole("button", { name: "Criar conta" }).click();

	expect(page.getByText("O nome deve ter pelo menos 2")).toBeVisible();
});

test("The email shoud be and email", async ({ page }) => {
	await page.fill("input#email", "emailinvalido");
	await page.getByRole("button", { name: "Criar conta" }).click();

	expect(
		page.locator("text=O valor deve ser um e-mail válido."),
	).toBeVisible();
});

test("If the name and email are valid, shoud submit the form", async ({
	page,
}) => {
	await page.fill("input#name", "Quinho");
	await page.fill("input#email", "quinhopereira@dev.com");
	await page.getByRole("button", { name: "Criar conta" }).click();

	await expect(page).toHaveURL("http://localhost:3000/login");
});

test("If the user already have an account, the link should ref Register Page", async ({
	page,
}) => {
	await page
		.getByRole("link", { name: "Já tem uma conta? Fazer login" })
		.click();

	await expect(page).toHaveURL("http://localhost:3000/login");
});
