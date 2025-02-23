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

  public timingsMs: number = 2000;
  public elDimParameters: ElementDimensionParamsInterface | null = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  };
  public isItFadingOut: boolean = false;


  constructor(private renderer2: Renderer2,
              private elementDimensionService: ElementDimensionService) {
  }

  public ngOnInit() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  public ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.elementDimensionService.dimensions$.subscribe(data => {
        this.elDimParameters = data;
        console.log("elDimParameters: ", this.elDimParameters)
      })

      timer(100).subscribe(() => {
        this.renderer2.addClass(this.targetWelcomeLogo.nativeElement, 'showOnStart')
      })

      timer(this.timingsMs).subscribe(() => {
        this.isItFadingOut = true;
        this.renderer2.addClass(this.targetWelcomeHalfTop.nativeElement, 'half-top-animate');
        this.renderer2.addClass(this.targetWelcomeHalfBottom.nativeElement, 'half-bottom-animate');
        timer(1200).subscribe(() => {
          this.renderer2.addClass(this.targetWelcome.nativeElement, 'd-none');
        })
      });
    })
  }
}
