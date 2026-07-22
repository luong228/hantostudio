import { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: false,
  name: 'local',
  appBaseUrl: 'http://localhost:4200',
  cdnBaseUrl: '',
  cms: {
    provider: 'strapi' as 'strapi' | 'payload',
    useMock: true,
    apiBaseUrl: 'http://localhost:1337/api',
    graphqlUrl: 'http://localhost:1337/graphql',
  },
};
