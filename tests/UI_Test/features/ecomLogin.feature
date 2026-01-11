Feature: Verify Login 

verify user is able to login with valid and Invalid credentials

Background:
Given I navigate to "https://ecommerce-playground.lambdatest.io/"
And I click on My account


Scenario: verify user is able to login with valid credentials
And I enter E-Mail Address "jmaidarkar@gmail.com"
And I enter password "Test@2026"
When I click on submit button
Then I should verify url contains "route=account/account"


Scenario: verify user is not able to login with following "<email>" and "<password>"
And I enter E-Mail Address "<email>"
And I enter password "<password>"
When I click on submit button
Then I should verify user is not able to login and url contains "route=account/login"

Examples:   
| email                     | password   |
|jmaidarkar@gmail.com       | Test@2025  |
|maidarkarj@gmail.com       | Test@2026  |
|maidarkar@gmail.com        | Test@2024  |