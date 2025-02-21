import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
import {ButtonMenuComponent} from "../../components/button-menu/button-menu.component";

@Component({
  selector: 'zpg-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public menuActive: boolean = false;
  public compsAnimationLogic: Array<boolean> = [];

  @ViewChild('menuButtonParent')
  public menuButtonParent!: ButtonMenuComponent;

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

  public isIntersecting (status: boolean, index: number) {
    this.compsAnimationLogic[index] = status;
  }
}
