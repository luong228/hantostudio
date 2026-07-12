import { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: true,
  name: 'staging',
  appBaseUrl: 'https://staging.studio.example.com',
  cms: {
    provider: 'strapi',
    useMock: false,
    apiBaseUrl: 'https://cms-staging.example.com/api',
    graphqlUrl: 'https://cms-staging.example.com/graphql'
  }
};
