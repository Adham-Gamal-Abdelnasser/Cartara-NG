import { Component } from '@angular/core';
import { FacebookIcon, LinkedinIcon, LucideAngularModule } from "lucide-angular";
import { ISocial } from '../../models/social/isocial.interface';
import { YoutubeIcon } from 'lucide-angular/src/icons';
import { SociallinkComponent } from "../sociallink/sociallink.component";
import { LetterComponent } from "../letter/letter.component";
import { IFooterInfo } from '../../models/footerinfo/ifooterlink.interface';
import { FooteritemComponent } from "../footeritem/footeritem.component";

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, SociallinkComponent, LetterComponent, FooteritemComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly copyRightYear: number = new Date().getFullYear();
  footerLinks: Array<ISocial>  = [
    {id: 1, nameIcon: FacebookIcon , href: 'https://www.facebook.com/profile.php?id=61585309791658&locale=ar_AR'},
    {id: 2, nameIcon: LinkedinIcon , href: 'https://www.linkedin.com/in/adhamgamal96/'},
    {id: 3, nameIcon: YoutubeIcon , href: 'https://www.youtube.com/@AdhamGamal-f6i'},
  ];
  footerSupports: Array<IFooterInfo> = [
    {id: 1, title: 'InstaPay'},
    {id: 2, title: 'Vodafone cash'},
    {id: 3, title: 'Banque du caire'},
    {id: 4, title: 'Banq misr'},
  ]
  footerContacts: Array<IFooterInfo> = [
    {id: 1, title: '01207892070'},
    {id: 2, title: '01014965697'},
    {id: 3, title: 'adhamgamal1907@gmail.com'},
  ]
}