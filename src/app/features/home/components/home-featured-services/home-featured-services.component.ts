import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceItem } from '../../../../core/models/content.models';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-featured-services',
  standalone: true,
  imports: [DecimalPipe, ContentCardComponent, SectionHeaderComponent],
  templateUrl: './home-featured-services.component.html',
  styleUrl: './home-featured-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeaturedServicesComponent {
  readonly services = input.required<readonly ServiceItem[]>();
}

