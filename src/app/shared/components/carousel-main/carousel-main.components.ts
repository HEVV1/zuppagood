import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
// Interfaces
import {CarouselImage} from "../../interfaces/carousel-image.interface";
// Services
import {ElementDimensionService} from "../../services/element-dimension.service";
import {ElementDimensionParamsInterface} from "../../interfaces/element-dimension-params.interface";
import {timer} from "rxjs";

@Component({
  selector: 'zpg-carousel-main',
  templateUrl: './carousel-main.components.html',
  styleUrl: './carousel-main.components.scss'
})
export class CarouselMainComponents implements AfterViewInit {
  @ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;
  @ViewChild('targetLogo') targetLogo!: ElementRef;

  public readonly CarouselImages: Array<CarouselImage> = [
    {
      id: 0,
      name: 'bg-00.jpg',
    },
    {
      id: 1,
      name: 'bg-01.jpg',
    },
    {
      id: 2,
      name: 'bg-02.jpg',
    },
    {
      id: 3,
      name: 'bg-03.jpg',
    },
    {
      id: 4,
      name: 'bg-04.jpg',
    },
  ]

  constructor(private renderer2: Renderer2,
              private elDimensionService: ElementDimensionService) {
  }

  public ngAfterViewInit(): void {
    const elementsArray = this.carouselItems.toArray()
    elementsArray[0].nativeElement.classList.add('active');
    this.renderer2.addClass(this.targetLogo.nativeElement, 'opacity-off')
    requestAnimationFrame(() => {

      const rect = this.targetLogo.nativeElement.getBoundingClientRect();
      const dimensions: ElementDimensionParamsInterface = {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      }
      this.elDimensionService.setDimensions(dimensions)
      timer(3000).subscribe(() => {
        this.renderer2.addClass(this.targetLogo.nativeElement, 'opacity-on')
      });
    })
  }
}
