import { test as base } from "playwright-bdd";
import * as Pages from "../pages/index";
import { Page } from "playwright/test";

type EcomLoginFixtures = {
  ecomLoginPage: Pages.EcomLoginPage;
};

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>,
  ) =>
    use(new PageClass(page));

export const test = base.extend<EcomLoginFixtures>({
  ecomLoginPage: createTestFunction(Pages.EcomLoginPage),
});
