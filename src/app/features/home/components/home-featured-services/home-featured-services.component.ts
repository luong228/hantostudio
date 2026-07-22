import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-featured-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-featured-services.component.html',
  styleUrl: './home-featured-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeaturedServicesComponent {
  readonly services = input.required<readonly ServiceItem[]>();
  readonly eyebrow = input<string>('Dịch Vụ Nổi Bật');
  readonly title = input<string>('3 nhóm được đặt chụp nhiều nhất tại studio');
  readonly subtitle = input<string | null>(null);

  private readonly priceFormatter = new Intl.NumberFormat('de-DE');

  formatPrice(price: number): string {
    return this.priceFormatter.format(price);
  }
}

