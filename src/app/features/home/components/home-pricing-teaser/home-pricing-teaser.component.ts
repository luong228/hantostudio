import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PricingPlan } from '../../../../core/models/content.models';
import { PricingCardsComponent } from '../../../../shared/ui/pricing-cards/pricing-cards.component';

@Component({
  selector: 'app-home-pricing-teaser',
  standalone: true,
  imports: [PricingCardsComponent],
  templateUrl: './home-pricing-teaser.component.html',
  styleUrl: './home-pricing-teaser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePricingTeaserComponent {
  readonly plans = input.required<readonly PricingPlan[]>();
}

