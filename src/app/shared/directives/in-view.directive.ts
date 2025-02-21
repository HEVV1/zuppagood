import {
  Directive,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ElementRef, AfterViewInit,
} from '@angular/core';
import {
  debounceTime,
  Observable,
  Subscription
} from "rxjs";

@Directive({
  selector: '[appInView]',
  exportAs: 'intersection'
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  // root - element that is used as the viewport for checking the visibility of the target.
  // If not specified it defaults to page viewport
  @Input() root: HTMLElement | null = null;
  // rootMargin - takes a value that will be used to calculate how much margin from the root an
  // element needs to have to be considered “visible”. For example, we can start loading an image
  // before it is fully visible to minimize the time needed to load it
  @Input() rootMargin = '0px 0px 0px 0px';
  // threshold - number inside the interval [0,1] which defines at what percentage of the
  // target’s visibility should the observer’s callback be executed, the default is 0
  // (meaning as soon as even one pixel is visible, the callback will be run), while 1
  // means that the threshold isn't considered passed until every pixel is visible
  @Input() threshold = 0;
  // debounceTime - Delays result when the user stopped scrolling
  @Input() debounceTime = 50;
  // isContinuous - Should it be triggered only once or constantly
  @Input() isContinuous = false;

  @Output() isIntersecting: EventEmitter<boolean> = new EventEmitter<boolean>();

  public _isIntersecting: boolean = false;
  public subscription: Subscription | undefined;

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.subscription = this.createAndObserve();
  }

  ngOnDestroy(): void {
    if (!this.subscription) {
      return
    }
    this.subscription.unsubscribe();
  }

  public createAndObserve(): Subscription {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    return new Observable<boolean>(subscriber => {
      const intersectionObserver = new IntersectionObserver(entries => {
        const {isIntersecting} = entries[0]
        subscriber.next(isIntersecting)

        if (isIntersecting && !this.isContinuous) {
          intersectionObserver.disconnect()
        }
      }, options)

      intersectionObserver.observe(this.element.nativeElement)

      return {
        unsubscribe() {
          intersectionObserver.disconnect()
        },
      }
    }).pipe(debounceTime(this.debounceTime))
      .subscribe(status => {
        this.isIntersecting.emit(status)
        this._isIntersecting = status
      });
  }
}
