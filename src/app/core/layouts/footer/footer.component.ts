import {Component} from '@angular/core';
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTripadvisor
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'zpg-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly faInstagram = faInstagram;
  protected readonly faFacebook = faFacebook;
  protected readonly faGoogle = faGoogle;
  protected readonly faTripadvisor = faTripadvisor;
}
