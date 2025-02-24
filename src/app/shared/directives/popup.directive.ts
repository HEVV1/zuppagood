import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';
import {timer} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Directive({
  selector: '[appPopup]'
})
export class PopupDirective implements AfterViewInit {
  @Input() public customClass!: string;
  public timingMs: number = 0;

  constructor(private renderer2: Renderer2,
              private elementRef: ElementRef,
              private cookieService: CookieService) {
    this.timingMs = cookieService.get('hasBeenVisited') ? 0 : 3100;
  }

  public ngAfterViewInit(): void {
    if (this.checkTheElementPosition()) {
      timer(this.timingMs).subscribe(() => {
        this.onWindowScroll();
      })
    }
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    if (this.checkTheElementPosition()) {
      this.renderer2.addClass(this.elementRef.nativeElement, this.customClass)
    }
  }

  private checkTheElementPosition(): boolean {
    const elementParameters = this.elementRef.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const isAbove = elementParameters.bottom < 0;
    const isBelow = elementParameters.top > viewportHeight;

    return !(isAbove || isBelow);
  }
}
