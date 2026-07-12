import { SeoMeta } from './content.models';

export interface NavItem {
  label: string;
  route: string;
}

export interface PageHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaRoute?: string;
}

export interface RouteSeoConfig {
  [routePath: string]: SeoMeta;
}
