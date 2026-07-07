import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class DashboardPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Locators
  dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });

  userDropdown = this.page.locator('.oxd-userdropdown-name');

  logoutOption = this.page.getByRole('menuitem', { name: 'Logout' });

  async verifyDashboardLoaded() {
    await expect(this.dashboardHeading).toBeVisible();
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutOption.click();
  }
}