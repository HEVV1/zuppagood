import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'zpg-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrl: './blog-menu.component.scss'
})
export class BlogMenuComponent {
  @Input() public imgUrl: string | undefined;
  @Input() public price: string | undefined;
  @Input() public foodTitle: string | undefined;
  @Input() public foodDescription: string | undefined;

}
