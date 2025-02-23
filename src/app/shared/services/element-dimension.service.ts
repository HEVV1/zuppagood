import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
// Interfaces
import {ElementDimensionParamsInterface} from "../interfaces/element-dimension-params.interface";


@Injectable({
  providedIn: "root",
})
export class ElementDimensionService {
  private dimensionsSource = new BehaviorSubject<ElementDimensionParamsInterface | null>(null);

  public dimensions$ = this.dimensionsSource.asObservable();

  public setDimensions(dimensions: ElementDimensionParamsInterface): void {
    this.dimensionsSource.next(dimensions)
  }
}
