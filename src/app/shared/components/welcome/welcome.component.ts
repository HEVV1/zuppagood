import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ElementDimensionService} from "../../services/element-dimension.service";
import {ElementDimensionParamsInterface} from "../../interfaces/element-dimension-params.interface";
import {timer} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'zpg-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements AfterViewInit, OnInit {
  @ViewChild('targetWelcome') public targetWelcome!: ElementRef;
  @ViewChild('targetWelcomeLogo') public targetWelcomeLogo!: ElementRef;
  @ViewChild('targetWelcomeHalfTop') public targetWelcomeHalfTop!: ElementRef;
  @ViewChild('targetWelcomeHalfBottom') public targetWelcomeHalfBottom!: ElementRef;
  @ViewChild('targetWelcomeText') public targetWelcomeText!: ElementRef;

  public elDimParameters: ElementDimensionParamsInterface | null = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  };
  public isItFadingOut: boolean = false;
  public isAnimationOff: string | null = null;

  constructor(private renderer2: Renderer2,
              private elementDimensionService: ElementDimensionService,
              private cookieService: CookieService) {
    this.isAnimationOff = this.cookieService.get('hasBeenVisited');
  }

  public ngOnInit() {
    if (!this.isAnimationOff) {
      document.documentElement.style.overflowY = 'hidden'
    }
  }

  public ngAfterViewInit(): void {
    if (!this.isAnimationOff) {
      this.renderer2.addClass(this.targetWelcomeHalfTop.nativeElement, 'opacity-on');
      this.renderer2.addClass(this.targetWelcomeHalfBottom.nativeElement, 'opacity-on');
      requestAnimationFrame(() => {
        this.elementDimensionService.dimensions$.subscribe(data => {
          this.elDimParameters = data;
        })

        timer(100).subscribe(() => {
          this.renderer2.addClass(this.targetWelcomeLogo.nativeElement, 'showOnStart')
          this.renderer2.addClass(this.targetWelcomeText.nativeElement, 'show-text')
        })

        timer(2000).subscribe(() => {
          this.isItFadingOut = true;
          this.renderer2.addClass(this.targetWelcomeHalfTop.nativeElement, 'half-top-animate');
          this.renderer2.addClass(this.targetWelcomeHalfBottom.nativeElement, 'half-bottom-animate');
          timer(1200).subscribe(() => {
            this.renderer2.addClass(this.targetWelcome.nativeElement, 'd-none');
            document.documentElement.style.overflowY = 'auto'
            this.cookieService.set('hasBeenVisited', 'true', 1)
          })
        });
      })
    }
  }
}
