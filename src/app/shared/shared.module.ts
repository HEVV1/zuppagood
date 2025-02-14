import {NgModule} from "@angular/core";
import {
  NgForOf,
  NgIf,
  NgOptimizedImage, NgStyle
} from "@angular/common";
import {BlogImageComponent} from "./components/blog-image/blog-image.component";
import {ButtonComponent} from "./components/button/button.component";
import {ButtonLinkComponent} from "./components/button-link/button-link.component";
import {CarouselMenuComponent} from "./components/carousel-menu/carousel-menu.component";
import {CarouselMainComponents} from "./components/carousel-main/carousel-main.components";
import {CarouselModule} from "ngx-owl-carousel-o";
import {SquareIconComponent} from "./components/square-icon/square-icon.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    BlogImageComponent,
    ButtonComponent,
    ButtonLinkComponent,
    CarouselMenuComponent,
    CarouselMainComponents,
    SquareIconComponent
  ],
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    CarouselModule,
    NgStyle,
    FaIconComponent,
  ],
  providers: [],
  exports: [
    BlogImageComponent,
    ButtonComponent,
    ButtonLinkComponent,
    CarouselMenuComponent,
    CarouselMainComponents,
    SquareIconComponent
  ],
})

export class SharedModule {
}
