import {Component} from '@angular/core';
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTripadvisor
} from "@fortawesome/free-brands-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'zpg-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly faInstagram = faInstagram;
  protected readonly faFacebook = faFacebook;
  protected readonly faGoogle = faGoogle;
  protected readonly faTripadvisor = faTripadvisor;

  constructor(public router: Router) {
  }
}
