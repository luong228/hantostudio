import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TrustMetric } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-trust-strip',
  standalone: true,
  templateUrl: './home-trust-strip.component.html',
  styleUrl: './home-trust-strip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTrustStripComponent {
  readonly metrics = input.required<readonly TrustMetric[]>();
}

