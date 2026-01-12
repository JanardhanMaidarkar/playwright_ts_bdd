import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
const { Given, When, Then } = createBdd(test);

Given("I navigate to {string}", async ({ ecomLoginPage, page }, url) => {
  await ecomLoginPage.navigateTo(url);
});

Given("I click on My account", async ({ ecomLoginPage }) => {
  await ecomLoginPage.clickMyAccount();
});

Given("I enter E-Mail Address {string}", async ({ ecomLoginPage }, email) => {
  await ecomLoginPage.enterEmailAddress(email);
});

Given("I enter password {string}", async ({ ecomLoginPage }, password) => {
  await ecomLoginPage.enterPassword(password);
});

When("I click on submit button", async ({ ecomLoginPage }) => {
  await ecomLoginPage.clickLogin();
});

Then("I should verify url contains {string}", async ({ page }, logged_url) => {
  await expect(page).toHaveURL(new RegExp(logged_url));
});

Then(
  "I should verify user is not able to login and url contains {string}",
  async ({ page }, login_url) => {
    await expect(page).toHaveURL(new RegExp(login_url));
  },
);
