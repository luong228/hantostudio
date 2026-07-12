import { InjectionToken } from '@angular/core';
import { StudioContentRepository } from './studio-content.repository';

export const STUDIO_CONTENT_REPOSITORY = new InjectionToken<StudioContentRepository>('STUDIO_CONTENT_REPOSITORY');
