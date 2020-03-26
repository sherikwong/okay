import { Injectable, InjectionToken } from "@angular/core";
import { IBaseItem, ICompositeItem, Item } from "../models/item.interface";
import { inventory } from "../../dummy";
import { BehaviorSubject, pipe, Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IItem } from '../models/item.interface';
import { OnInit } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

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
    this.getAll();
  }


  // Load all items
  // Paginate
  private load(): void {
  }

  // Static data for one item
  // Should I allow internal access to items?
  public get(id: string): Item { // return T
    return this._items.find(item => item.id === id);
  }

  // Static data for all
  // Should I allow internal access to items?
  public getAll(): any {
    // console.log('Hello', this.http.get('/items'));
    return this.http.get('/items').subscribe(val => console.log(val));
  }

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
