import { Provider, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpStudioContentRepository } from './http-studio-content.repository';
import { MockStudioContentRepository } from './mock-studio-content.repository';
import { STUDIO_CONTENT_REPOSITORY } from './studio-content.repository.token';

export function provideStudioContentRepository(): Provider[] {
  return [
    MockStudioContentRepository,
    HttpStudioContentRepository,
    {
      provide: STUDIO_CONTENT_REPOSITORY,
      useFactory: () => {
        if (environment.cms.useMock) {
          return inject(MockStudioContentRepository);
        }

        return inject(HttpStudioContentRepository);
      }
    }
  ];
}
