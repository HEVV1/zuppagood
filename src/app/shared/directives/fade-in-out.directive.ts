import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appFadeInOut]'
})
export class FadeInOutDirective implements AfterViewInit {
  private elementPosY: number = 0;
  private fadeIn: boolean = false;

  constructor(private element: ElementRef,
              private render: Renderer2) {
  }

  public ngAfterViewInit(): void {
    this.elementPosY = this.element.nativeElement.getBoundingClientRect().top - window.scrollY;
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 100) {
      if (!this.fadeIn) {
        this.render.addClass(this.element.nativeElement, 'comp-fade-in')
        this.fadeIn = true;
      }
    } else {
      if (this.fadeIn) {
        this.render.removeClass(this.element.nativeElement, 'comp-fade-in')
        this.fadeIn = false;
      }
    }
  }
}
