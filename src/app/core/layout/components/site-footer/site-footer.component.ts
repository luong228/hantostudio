import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { ContentRepositoryService } from '../../../services/content-repository.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly contentRepo = inject(ContentRepositoryService);
  protected readonly year = new Date().getFullYear();
  protected readonly cdn = environment.cdnBaseUrl;
}
