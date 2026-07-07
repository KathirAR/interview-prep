import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Locators
  usernameInput = this.page.getByPlaceholder('Username');

  passwordInput = this.page.getByPlaceholder('Password');

  loginButton = this.page.getByRole('button', { name: 'Login' });

  invalidCredentialsMessage = this.page.getByText('Invalid credentials');

  async open() {
    await this.navigateTo('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginPage() {
    await expect(this.loginButton).toBeVisible();
  }

  async verifyInvalidLogin() {
    await this.invalidCredentialsMessage.waitFor({
  state: 'visible',
  timeout: 10000
});
    await expect(this.invalidCredentialsMessage).toBeVisible();
    await expect(this.invalidCredentialsMessage).toHaveText('Invalid credentials');
  }
}