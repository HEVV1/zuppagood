import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
import {timer} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {ButtonMenuComponent} from "../../components/button-menu/button-menu.component";

@Component({
  selector: 'zpg-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  public menuActive: boolean = false;
  public timingMs: number = 3100;

  @ViewChild('menuButtonParent') public menuButtonParent!: ButtonMenuComponent;
  @ViewChild('targetHeaderNav') public targetHeaderNav!: ElementRef;

  constructor(private renderer2: Renderer2,
              private cookieService: CookieService) {
    this.timingMs = this.cookieService.get('hasBeenVisited') ? 0 : 3100;
  }

  public ngAfterViewInit() {
    requestAnimationFrame(() => {
      timer(this.timingMs).subscribe(() => {
        this.renderer2.addClass(this.targetHeaderNav.nativeElement, 'header__desktop-wrapper-nav-ul-animate');
      })
    })
  }

  public toggleMenu(event: Event) {
    this.menuActive = !this.menuActive;
    const childElement = this.menuButtonParent.getDOMElement()
    if (this.menuActive) {
      childElement.nativeElement.classList.add('animation-on');
      childElement.nativeElement.classList.remove('animation-reverse');
    } else {
      childElement.nativeElement.classList.remove('animation-on');
      childElement.nativeElement.classList.add('animation-reverse');
    }
  }
}
