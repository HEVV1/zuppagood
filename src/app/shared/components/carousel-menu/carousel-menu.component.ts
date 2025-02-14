import {Component} from "@angular/core";
import {CarouselMenuImage} from "../../interfaces/carousel-image.interface";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'zpg-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrl: './carousel-menu.component.scss',
})
export class CarouselMenuComponent {
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        dotsEach: 1,
        items: 1
      },
      691: {
        dotsEach: 1,
        items: 2
      },
      915: {
        dotsEach: 1,
        items: 3
      },
    },
    nav: false,
    autoplay: true
  }

  public carouselContent: Array<CarouselMenuImage> = [
    {
      id: '0',
      urlSrc: 'soup-chili.jpg'
    },
    {
      id: '1',
      urlSrc: 'soup-fish.jpg'
    },
    {
      id: '2',
      urlSrc: 'soup-mushroom.jpg'
    },
    {
      id: '3',
      urlSrc: 'soup-pea.jpg'
    },
    {
      id: '4',
      urlSrc: 'soup-soljanka.jpg'
    },
    {
      id: '5',
      urlSrc: 'soup-tomates.jpg'
    },
  ];
}
