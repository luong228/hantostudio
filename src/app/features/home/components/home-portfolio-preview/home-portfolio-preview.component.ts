import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioCollection } from '../../../../core/models/content.models';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-portfolio-preview',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './home-portfolio-preview.component.html',
  styleUrl: './home-portfolio-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePortfolioPreviewComponent {
  readonly collections = input.required<readonly PortfolioCollection[]>();
}

