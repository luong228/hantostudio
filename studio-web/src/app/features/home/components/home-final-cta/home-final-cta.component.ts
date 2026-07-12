import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-home-final-cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-final-cta.component.html',
  styleUrl: './home-final-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFinalCtaComponent {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly primaryLabel = input.required<string>();
  readonly primaryRoute = input.required<string>();
  readonly secondaryLabel = input.required<string>();
  readonly secondaryRoute = input.required<string>();
}

