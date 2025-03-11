import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import {
  BehaviorSubject,
  Observable
} from "rxjs";
import {MenuInterface} from "../../shared/interfaces/menu.interface";

const URL_IMAGE_PATH: string = 'assets/images/carousel-menu';
const MENU_ITEMS: MenuInterface[] = [
  {
    imgUrl: `${URL_IMAGE_PATH}/soup-tomates.jpg`,
    price: '~4€',
    foodTitle: 'Crème de tomates',
    foodDescription: 'Italian tomatoes, fresh basil pesto, parmigianino and thyme'
  }, {
    imgUrl: `${URL_IMAGE_PATH}/soup-pea.jpg`,
    price: '~4€',
    foodTitle: 'Green Pea&Mint',
    foodDescription: 'Green Peas and mint, double cream, potatoes and thyme'
  }, {
    imgUrl: `${URL_IMAGE_PATH}/soup-mushroom.jpg`,
    price: '~4€',
    foodTitle: 'Mushroom',
    foodDescription: 'Mushrooms, white wine, truffles and double cream'
  }, {
    imgUrl: `${URL_IMAGE_PATH}/soup-soljanka.jpg`,
    price: '~5€',
    foodTitle: 'Soljanka',
    foodDescription: 'Salami, local smoked pork breast, homemade pickled cucumber, black olives, garlic'
  }, {
    imgUrl: `${URL_IMAGE_PATH}/soup-chili.jpg`,
    price: '~5€',
    foodTitle: 'Chili con-carne',
    foodDescription: 'Chili peppers, meat, tomatoes, paprika and kidney beans'
  }, {
    imgUrl: `${URL_IMAGE_PATH}/soup-fish.jpg`,
    price: '~5€',
    foodTitle: 'Fish Soup',
    foodDescription: 'Fresh salmon, white wine, double cream, leek and celery, shrimps (topping)'
  },
]

@Component({
  selector: 'zpg-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuInterface[] | null = MENU_ITEMS;
  public isItRenderedReactive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isItRendered$: Observable<boolean> = this.isItRenderedReactive.asObservable();

  @ViewChildren('listBlogMenu') public listItems!: QueryList<ElementRef>;

  public ngOnInit(): void {
    if (!this.menuItems) {
      return;
    }
    this.preloadImages(this.menuItems).then(() => {
      this.isItRenderedReactive.next(true);
    }).catch((error) => {
      console.error(error);
    });
  }

  public preloadImages(urls: MenuInterface[]): Promise<void[]> {
    const promises = urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url.imgUrl;
        img.onload = () => resolve();
        img.onerror = () => reject(`Image failed to load; ${url}`);
      });
    });
    return Promise.all(promises);
  }
}
