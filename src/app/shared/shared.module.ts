import {NgModule} from "@angular/core";
import {
  NgForOf,
  NgIf,
  NgOptimizedImage
} from "@angular/common";
import {BlogImageComponent} from "./components/blog-image/blog-image.component";
import {ButtonComponent} from "./components/button/button.component";
import {ButtonLinkComponent} from "./components/button-link/button-link.component";
import {CarouselMenuComponent} from "./components/carousel-menu/carousel-menu.component";
import {CarouselMainComponents} from "./components/carousel-main/carousel-main.components";


@NgModule({
  declarations: [
    BlogImageComponent,
    ButtonComponent,
    ButtonLinkComponent,
    CarouselMenuComponent,
    CarouselMainComponents
  ],
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
  ],
  providers: [],
  exports: [
    BlogImageComponent,
    ButtonComponent,
    ButtonLinkComponent,
    CarouselMenuComponent,
    CarouselMainComponents
  ],
})

export class SharedModule {
}
