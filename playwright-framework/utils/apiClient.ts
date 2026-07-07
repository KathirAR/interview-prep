import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { env } from './env';

export class ApiClient {
  private apiContext!: APIRequestContext;

  async init() {
    this.apiContext = await request.newContext({
      baseURL: env.apiBaseURL,
    });
  }

  async get(endpoint: string): Promise<APIResponse> {
    return await this.apiContext.get(endpoint);
  }

  async post(endpoint: string, payload: object): Promise<APIResponse> {
    return await this.apiContext.post(endpoint, {
      data: payload,
    });
  }

  async put(endpoint: string, payload: object): Promise<APIResponse> {
    return await this.apiContext.put(endpoint, {
      data: payload,
    });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return await this.apiContext.delete(endpoint);
  }

  async dispose() {
    await this.apiContext.dispose();
  }
}