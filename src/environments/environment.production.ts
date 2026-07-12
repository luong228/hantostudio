import { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: true,
  name: 'production',
  appBaseUrl: 'https://studio.example.com',
  cms: {
    provider: 'strapi',
    useMock: false,
    apiBaseUrl: 'https://cms.example.com/api',
    graphqlUrl: 'https://cms.example.com/graphql'
  }
};
