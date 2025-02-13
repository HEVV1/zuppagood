import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CarouselImage} from "../../interfaces/carousel-image.interface";

@Component({
  selector: 'zpg-carousel-main',
  templateUrl: './carousel-main.components.html',
  styleUrl: './carousel-main.components.scss'
})
export class CarouselMainComponents {
  @ViewChildren('carouselItem') carouselItems: QueryList<ElementRef> | undefined;

  public readonly CarouselImages: Array<CarouselImage> = [
    {
      id: 0,
      name: 'bg-00.jpg',
    },
    // {
    //   id: 1,
    //   name: 'bg-01.jpg',
    // },
    // {
    //   id: 2,
    //   name: 'bg-02.jpg',
    // },
    // {
    //   id: 3,
    //   name: 'bg-03.jpg',
    // },
    // {
    //   id: 4,
    //   name: 'bg-04.jpg',
    // },
  ]

  ngAfterViewInit(): void {
    if (!this.carouselItems) {
      return
    }
    const elementsArray = this.carouselItems.toArray()
    elementsArray[0].nativeElement.classList.add('active');
  }
}
