import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';
import { ContactFormComponent } from '../../../../shared/ui/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [SectionHeaderComponent, ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.repo
      .pageSeo$('/lien-he', {
        title: 'Contact And Booking | Lumen Atelier',
        description: 'Start your booking inquiry and plan a photography session with our studio team.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
