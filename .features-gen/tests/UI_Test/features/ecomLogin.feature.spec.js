// Generated from: tests\UI_Test\features\ecomLogin.feature
import { test } from "../../../../tests/UI_Test/fixtures/fixtures.ts";

test.describe('Verify Login', () => {

  test.beforeEach('Background', async ({ Given, And, ecomLoginPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage, page }); 
    await And('I click on My account', null, { ecomLoginPage }); 
  });
  
  test('verify user is able to login with valid credentials', async ({ When, Then, And, ecomLoginPage, page }) => { 
    await And('I enter E-Mail Address "jmaidarkar@gmail.com"', null, { ecomLoginPage }); 
    await And('I enter password "Test@2026"', null, { ecomLoginPage }); 
    await When('I click on submit button', null, { ecomLoginPage }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

  test.describe('verify user is not able to login with following "<email>" and "<password>"', () => {

    test('verify user is not able to login with following "jmaidarkar@gmail.com" and "Test@2025"', async ({ When, Then, And, ecomLoginPage, page }) => { 
      await And('I enter E-Mail Address "jmaidarkar@gmail.com"', null, { ecomLoginPage }); 
      await And('I enter password "Test@2025"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('verify user is not able to login with following "maidarkarj@gmail.com" and "Test@2026"', async ({ When, Then, And, ecomLoginPage, page }) => { 
      await And('I enter E-Mail Address "maidarkarj@gmail.com"', null, { ecomLoginPage }); 
      await And('I enter password "Test@2026"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('verify user is not able to login with following "maidarkar@gmail.com" and "Test@2024"', async ({ When, Then, And, ecomLoginPage, page }) => { 
      await And('I enter E-Mail Address "maidarkar@gmail.com"', null, { ecomLoginPage }); 
      await And('I enter password "Test@2024"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\features\\ecomLogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click on My account","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"jmaidarkar@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"jmaidarkar@gmail.com\"","children":[{"start":24,"value":"jmaidarkar@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter password \"Test@2026\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test@2026\"","children":[{"start":18,"value":"Test@2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click on My account","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"jmaidarkar@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"jmaidarkar@gmail.com\"","children":[{"start":24,"value":"jmaidarkar@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter password \"Test@2025\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test@2025\"","children":[{"start":18,"value":"Test@2025","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click on My account","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"maidarkarj@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"maidarkarj@gmail.com\"","children":[{"start":24,"value":"maidarkarj@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter password \"Test@2026\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test@2026\"","children":[{"start":18,"value":"Test@2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click on My account","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"maidarkar@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"maidarkar@gmail.com\"","children":[{"start":24,"value":"maidarkar@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter password \"Test@2024\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test@2024\"","children":[{"start":18,"value":"Test@2024","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end