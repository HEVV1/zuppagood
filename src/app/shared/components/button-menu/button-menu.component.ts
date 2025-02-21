import {
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'zpg-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {
  @ViewChild('menuButton') public menuButton!: ElementRef;

  constructor() {
  }

  public getDOMElement(): ElementRef {
    return this.menuButton;
  }
}
