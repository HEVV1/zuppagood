import {NgModule} from "@angular/core";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {CarouselMainComponents} from "./components/carousel-main/carousel-main.components";


@NgModule({
  declarations: [CarouselMainComponents],
  imports: [
    NgForOf,
    NgOptimizedImage,
  ],
  providers: [],
  exports: [CarouselMainComponents],
})

export class SharedModule {
}
