import { Component, Input } from '@angular/core';
import { ISocial } from '../../models/social/isocial.interface';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-sociallink',
  imports: [LucideAngularModule],
  templateUrl: './sociallink.component.html',
  styleUrl: './sociallink.component.css',
})
export class SociallinkComponent {
  @Input() socalLink!:ISocial
}
