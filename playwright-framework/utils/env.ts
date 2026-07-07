import dotenv from 'dotenv';
import { resolve } from 'node:path';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const selectedEnv = (process.env.ENV || 'qa').toLowerCase();

const config = {
  qa: {
    baseURL: process.env.QA_BASE_URL,
    username: process.env.QA_USERNAME,
    password: process.env.QA_PASSWORD,
    apiBaseURL: process.env.API_BASE_URL,
  },
  staging: {
    baseURL: process.env.STAGING_BASE_URL,
    username: process.env.STAGING_USERNAME,
    password: process.env.STAGING_PASSWORD,
    apiBaseURL: process.env.API_BASE_URL,
  },
  prod: {
    baseURL: process.env.PROD_BASE_URL,
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    apiBaseURL: process.env.API_BASE_URL,
  },
};

const currentEnv = config[selectedEnv as keyof typeof config];

if (!currentEnv) {
  throw new Error(`Invalid ENV value: ${selectedEnv}`);
}

if (!currentEnv.baseURL || !currentEnv.username || !currentEnv.password || !currentEnv.apiBaseURL) {
  throw new Error(`Missing environment values for ENV: ${selectedEnv}`);
}

export const env = currentEnv;