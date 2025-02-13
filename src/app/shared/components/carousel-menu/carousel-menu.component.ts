import {Component} from "@angular/core";
import {CarouselMenuImage} from "../../interfaces/carousel-image.interface";

@Component({
  selector: 'zpg-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrl: './carousel-menu.component.scss',
})
export class CarouselMenuComponent {
  public carouselMainPictures: Array<CarouselMenuImage> = [
    {
      id: '0',
      name: 'soup-chili.jpg'
    },
    {
      id: '1',
      name: 'soup-fish.jpg'
    },
    {
      id: '2',
      name: 'soup-mushroom.jpg'
    },
    {
      id: '3',
      name: 'soup-pea.jpg'
    },
    {
      id: '4',
      name: 'soup-soljanka.jpg'
    },
    {
      id: '5',
      name: 'soup-tomates.jpg'
    },
  ];
}
