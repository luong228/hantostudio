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
  private readonly priceFormatter = new Intl.NumberFormat('de-DE');

  formatPrice(price: number): string {
    return this.priceFormatter.format(price);
  }
}

