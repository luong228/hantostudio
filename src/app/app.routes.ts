import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./core/layout/site-shell/site-shell.component').then((m) => m.SiteShellComponent),
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./features/home/pages/home-page/home-page.component').then((m) => m.HomePageComponent)
			},
			{
				path: 'dich-vu',
				loadComponent: () =>
					import('./features/services/pages/services-page/services-page.component').then((m) => m.ServicesPageComponent)
			},
			{
				path: 'dich-vu/:slug',
				loadComponent: () =>
					import('./features/services/pages/service-detail-page/service-detail-page.component').then(
						(m) => m.ServiceDetailPageComponent
					)
			},
			{
				path: 'bang-gia',
				loadComponent: () =>
					import('./features/pricing/pages/pricing-page/pricing-page.component').then((m) => m.PricingPageComponent)
			},
			{
				path: 'about',
				loadComponent: () =>
					import('./features/about/pages/about-page/about-page.component').then((m) => m.AboutPageComponent)
			},
			{
				path: 'blog',
				loadComponent: () =>
					import('./features/blog/pages/blog-page/blog-page.component').then((m) => m.BlogPageComponent)
			},
			{
				path: 'blog/:slug',
				loadComponent: () =>
					import('./features/blog/pages/blog-detail-page/blog-detail-page.component').then(
						(m) => m.BlogDetailPageComponent
					)
			},
			{
				path: 'cau-hoi-thuong-gap',
				loadComponent: () =>
					import('./features/faq/pages/faq-page/faq-page.component').then((m) => m.FaqPageComponent)
			},
			{
				path: 'lien-he',
				loadComponent: () =>
					import('./features/contact/pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent)
			},
			{ path: 'services', redirectTo: 'dich-vu', pathMatch: 'full' },
			{ path: 'services/:slug', redirectTo: 'dich-vu/:slug', pathMatch: 'full' },
			{ path: 'pricing', redirectTo: 'bang-gia', pathMatch: 'full' },
			{ path: 'portfolio', redirectTo: 'bo-suu-tap', pathMatch: 'full' },
			{ path: 'portfolio/:slug', redirectTo: 'bo-suu-tap/:slug', pathMatch: 'full' },
			{ path: 'faq', redirectTo: 'cau-hoi-thuong-gap', pathMatch: 'full' },
			{ path: 'contact', redirectTo: 'lien-he', pathMatch: 'full' },
			{
				path: '**',
				loadComponent: () =>
					import('./features/not-found/pages/not-found-page/not-found-page.component').then(
						(m) => m.NotFoundPageComponent
					)
			}
		]
	}
];
