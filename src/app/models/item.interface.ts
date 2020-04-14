
import { Unit } from "../enums/unit.enum";
import { Inject, Injectable } from "@angular/core";
// import { ItemService, ItemsServiceToken } from "../services/item.service";
import { Type } from "../enums/type.enum";
import { Location } from '../enums/location.enum';

export type IItem = ICompositeItem | IBaseItem;

export interface ICompositeItem extends IBaseItem {
  // If the item does not have ingredients listed, then it is a raw/uncooked ingredient
  ingredients?: IItem[];
  unit?: Unit;
  quantity?: number;
  type?: Type;
  location?: Location;
}

export interface IBaseItem {
  id: string;
  name: string;
  description?: string;
  dateUpdated?: Date;
  dateAdded: Date;
}

export class BaseItem implements IBaseItem {
  protected _details?: IBaseItem;

  public get id(): string { return this._details.id; }
  public set id(id: string) { this._details.id = id }
  public set name(name: string) { this._details.name = name }
  public get name(): string { return this._details.name; }
  public set description(description: string) { this._details.description = description }
  public get description(): string { return this._details.description; }
  public get dateUpdated(): Date { return this._details.dateUpdated; }
  public set dateUpdated(dateUpdated: Date) { this._details.dateUpdated = dateUpdated }
  public get dateAdded(): Date { return this._details.dateAdded; }
  public set dateAdded(dateAdded: Date) { this._details.dateAdded = dateAdded }

  constructor(details: IBaseItem,
    // protected itemsService: ItemService
  ) {
    details = this._details as IBaseItem;
  }

  public update(): void {
    this.dateUpdated = new Date();
    // this.itemsService.update<IBaseItem>(this._details);
  }
}
// @Injectable({
//   providedIn: 'root'
// })
export class Item extends BaseItem implements ICompositeItem {
  protected _details?: IItem;

  private get details(): ICompositeItem {
    return this._details as ICompositeItem;
  }

  public get type(): Type { return this.details.type; }
  public set type(type: Type) { this.details.type = type }
  public get location(): Location { return this.details.location; }
  public set location(location: Location) { this.details.location = location }
  public get quantity(): number { return this.details.quantity; }
  public set quantity(quantity: number) { this.details.quantity = quantity }

  constructor(details: ICompositeItem,
    // protected itemsService: ItemService
  ) {
    super(details);
    this._details = this.isIngredient(details) && details as ICompositeItem;
  }

  public isIngredient(details: IItem): boolean {
    return 'ingredients' in details;
  }

  public increment(): void {
    this.quantity++;
    this.update();
  }

  public decrement(): void {
    this.quantity--;
  }
}
