import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceItem } from '../../../../core/models/content.models';
import { HomeFeaturedServicesComponent } from '../home-featured-services/home-featured-services.component';

@Component({
  selector: 'app-home-all-services',
  standalone: true,
  imports: [HomeFeaturedServicesComponent],
  templateUrl: './home-all-services.component.html',
  styleUrl: './home-all-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAllServicesComponent {
  readonly services = input.required<readonly ServiceItem[]>();
  readonly eyebrow = input<string>('Toàn Bộ Dịch Vụ');
  readonly title = input<string>('Các concept theo chủ đề riêng');
  readonly subtitle = input<string | null>('Mỗi bộ sưu tập là đều có hướng rõ ràng: thanh lịch, nhẹ nhàng và chuyên nghiệp.');
}
