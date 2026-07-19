import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceItem } from '../../../../core/models/content.models';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';

@Component({
  selector: 'app-home-all-services',
  standalone: true,
  imports: [SectionHeaderComponent, ContentCardComponent],
  templateUrl: './home-all-services.component.html',
  styleUrl: './home-all-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAllServicesComponent {
  readonly services = input.required<readonly ServiceItem[]>();
  private readonly priceFormatter = new Intl.NumberFormat('de-DE');

  getEyebrow(service: ServiceItem): string {
    return service.badges[0]?.toUpperCase() ?? 'DỊCH VỤ';
  }

  formatPrice(price: number): string {
    return this.priceFormatter.format(price);
  }
}
