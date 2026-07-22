import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingCategory, PricingPlan } from '../../../core/models/content.models';

@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './pricing-cards.component.html',
  styleUrl: './pricing-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingCardsComponent {
  readonly plans = input.required<readonly PricingPlan[]>();
  /** Show the trust bar + privacy note below the grid (default: true) */
  readonly showTrust = input(true);

  protected readonly activeCategory = signal<PricingCategory>('nu');

  protected readonly tabs: { id: PricingCategory; label: string }[] = [
    { id: 'nam',      label: 'Nam'      },
    { id: 'nu',       label: 'Nữ'       },
    { id: 'gia-dinh', label: 'Gia đình' },
  ];

  protected readonly activePlans = computed(() =>
    this.plans().filter(p => p.category === this.activeCategory())
  );

  protected setCategory(cat: PricingCategory): void {
    this.activeCategory.set(cat);
  }
}
