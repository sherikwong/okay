import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IItem, Item } from "../models/item.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemService implements OnInit {
  private _itemsSubject = new BehaviorSubject<IItem[]>([] as IItem[]);

  constructor(
    private http: HttpClient
  ) {

  }

  private get _items(): Item[] {
    return [];
    // return this._itemsSubject.value;
  }

  private set _items(items: Item[]) {
    this._itemsSubject.next(items);
  }

  ngOnInit() {
    // this.load();
    // this.getAll();
    this.get('asofa');
  }

  // Static data for one item
  // Should I allow internal access to items?
  public get(id?: string): any { // return T
    return this.http.get('/items/1').subscribe(val => console.log(val))
  }

  // Static data for all
  // Should I allow internal access to items?
  // public getAll(): any {
  //   // console.log('Hello', this.http.get('/items'));
  //   return this.http.get('/items').subscribe(val => console.log(val));
  // }

  public update<T>(updated: T): void {

  }

  // Pipe item into Item class object to give functionality
  public subscribe(): Observable<Item[]> {
    return this._itemsSubject.asObservable().pipe((
      map((items: IItem[]) => {
        const parsedItems = items.map((itemDetails: IItem) => new Item(itemDetails))
        // const parsedItems = items.map((itemDetails: IItem) => new Item(itemDetails))
        this._items = parsedItems;
        return parsedItems;
      })
    ))
  }

  // TODO: Filter by DB or by front-end?
  // public filter(): IItem[] {

  // }
}
