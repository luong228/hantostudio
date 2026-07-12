import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-conversion-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './conversion-banner.component.html',
  styleUrl: './conversion-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionBannerComponent {
  readonly eyebrow = input<string>('Planning your session');
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly primaryLabel = input<string>('Book now');
  readonly primaryRoute = input<string>('/lien-he');
  readonly secondaryLabel = input<string>('Explore services');
  readonly secondaryRoute = input<string>('/dich-vu');
}
