import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {timer} from "rxjs";
import {CookieService} from "ngx-cookie-service";
// Interfaces
import {CarouselImage} from "../../interfaces/carousel-image.interface";
// Services
import {ElementDimensionService} from "../../services/element-dimension.service";
import {ElementDimensionParamsInterface} from "../../interfaces/element-dimension-params.interface";

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
  public timingMs: number = 3100;
  public readonly _isAnimationOff: string | null = null;

  constructor(private renderer2: Renderer2,
              private elDimensionService: ElementDimensionService,
              private cookieService: CookieService) {
    this._isAnimationOff = this.cookieService.get('hasBeenVisited');
  }

  public ngAfterViewInit(): void {
    const elementsArray = this.carouselItems.toArray();
    elementsArray[0].nativeElement.classList.add('active');

    if (!this._isAnimationOff) {
      requestAnimationFrame(() => {
        this.renderer2.addClass(this.targetLogo.nativeElement, 'opacity-off');
        const rect = this.targetLogo.nativeElement.getBoundingClientRect();
        const dimensions: ElementDimensionParamsInterface = {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
        };
        this.elDimensionService.setDimensions(dimensions);
        timer(this.timingMs).subscribe(() => {
          this.renderer2.addClass(this.targetLogo.nativeElement, 'opacity-on');
        });
      })
    }
  }
}
