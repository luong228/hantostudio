import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-all-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-all-services.component.html',
  styleUrl: './home-all-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAllServicesComponent {
  readonly services = input.required<readonly ServiceItem[]>();
  private readonly priceFormatter = new Intl.NumberFormat('de-DE');

  formatPrice(price: number): string {
    return this.priceFormatter.format(price);
  }
}
