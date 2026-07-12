import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingPlan } from '../../../../core/models/content.models';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-pricing-teaser',
  standalone: true,
  imports: [DecimalPipe, RouterLink, ButtonComponent],
  templateUrl: './home-pricing-teaser.component.html',
  styleUrl: './home-pricing-teaser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePricingTeaserComponent {
  readonly plans = input.required<readonly PricingPlan[]>();
}
