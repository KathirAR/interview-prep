import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';

test.describe('API Tests', () => {
  let apiClient: ApiClient;

  test.beforeEach(async () => {
    apiClient = new ApiClient();
    await apiClient.init();
  });

  test.afterEach(async () => {
    await apiClient.dispose();
  });

  test('Get User Details', async () => {
    const response = await apiClient.get('/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.name).toBeTruthy();
    expect(body.email).toContain('@');
  });

  test('Create New Post', async () => {
    const payload = {
      title: 'Test_Kathir',
      body: 'API Automation using Playwright',
      userId: 17,
    };

    const response = await apiClient.post('/posts', payload);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
    expect(body.userId).toBe(payload.userId);
    expect(body.id).toBeTruthy();
  });

  test('Delete Post', async () => {
    const response = await apiClient.delete('/posts/1');
    expect(response.status()).toBe(200);
  });
});