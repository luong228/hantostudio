import { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: true,
  name: 'production',
  appBaseUrl: 'https://hantostudio-a133e.web.app',
  cms: {
    provider: 'strapi',
    useMock: false,
    apiBaseUrl: 'https://hantostudio-a133e.web.app/api',
    graphqlUrl: 'https://hantostudio-a133e.web.app/graphql'
  }
};
