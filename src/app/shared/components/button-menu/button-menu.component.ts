import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'zpg-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent implements AfterViewInit {
  @ViewChild('menuButton') public menuButton!: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log(this.menuButton)
  }

  public getDOMElement(): ElementRef {
    return this.menuButton;
  }
}
