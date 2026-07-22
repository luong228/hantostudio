import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { TrustMetric } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  protected readonly cdn = environment.cdnBaseUrl;
}
