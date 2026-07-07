import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';


test.describe('OrangeHRM website Login scenario', () => {

  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.open();
  });

  test('Verify user should login successfully with valid credentials', async () => {

    await loginPage.login(
      process.env.USERNAME!,
      process.env.PASSWORD!
    );

    await dashboardPage.verifyDashboardLoaded();

  });

  test('should display error message for invalid credentials', async () => {

  await loginPage.login(
    'Admin',
    'WrongPassword'
  );

  await loginPage.verifyInvalidLogin();

});

});