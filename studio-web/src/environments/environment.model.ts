export type CmsProvider = 'strapi' | 'payload';

export interface CmsEnvironmentConfig {
  provider: CmsProvider;
  useMock: boolean;
  apiBaseUrl: string;
  graphqlUrl: string;
}

export interface AppEnvironment {
  production: boolean;
  name: 'development' | 'staging' | 'production' | 'local';
  appBaseUrl: string;
  cms: CmsEnvironmentConfig;
}
