import { Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class EcomLoginPage extends BasePage {
    
    readonly myAccountButton: Locator;
    readonly emailAddressField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;


    constructor(page: Page) {
        super(page);
   
        this.myAccountButton = page.getByRole('button', { name: 'My Account' });
        this.emailAddressField = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' }); 
    }    

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }   
    async clickMyAccount(): Promise<void> {
        await this.myAccountButton.click();
    }   
    async enterEmailAddress(email: string): Promise<void> {
        await this.emailAddressField.fill(email);
    }
    async enterPassword(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }
    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }   

    
}