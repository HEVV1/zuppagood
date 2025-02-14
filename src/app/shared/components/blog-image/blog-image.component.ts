import {Component, Input} from "@angular/core";

@Component({
  selector: "zpg-blog-image",
  templateUrl: "./blog-image.component.html",
  styleUrl: "./blog-image.component.scss",
})
export class BlogImageComponent {
  @Input() public isThereATopImage: boolean | undefined;
  @Input() public isThereABottomImage: boolean | undefined;
  @Input() public imgUrl: string | undefined;
  @Input() public position: string | undefined;
}
