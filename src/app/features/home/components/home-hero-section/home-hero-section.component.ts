import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrustMetric } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeroSectionComponent {
  readonly eyebrow = input.required<string>();
  readonly headline = input.required<string>();
  readonly subheadline = input.required<string>();
  readonly trustLine = input.required<string>();
  readonly primaryCtaLabel = input.required<string>();
  readonly primaryCtaRoute = input.required<string>();
  readonly secondaryCtaLabel = input.required<string>();
  readonly secondaryCtaRoute = input.required<string>();
  readonly heroImage = input.required<string>();
  readonly heroImageAlt = input<string>('');
  readonly metrics = input.required<readonly TrustMetric[]>();

  protected readonly floatingPhotoPlaceholders = [
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=760&q=80',
    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=760&q=80',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=760&q=80',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=760&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=760&q=80'
  ] as const;
}

