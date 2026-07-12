import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BranchInfo, ContactChannel, StudioInfo } from '../../../../core/models/content.models';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-branches-contact',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './home-branches-contact.component.html',
  styleUrl: './home-branches-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBranchesContactComponent {
  readonly branches = input.required<readonly BranchInfo[]>();
  readonly channels = input.required<readonly ContactChannel[]>();
  readonly studioInfo = input.required<StudioInfo>();
}
