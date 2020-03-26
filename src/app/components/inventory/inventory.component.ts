import { Component, OnInit } from '@angular/core';
// import { ItemService } from '../../services/item.service';
import { IBaseItem, ICompositeItem } from '../../models/item.interface';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'okay-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    // this.itemService.getAll();
    this.itemService.get('124');
  }
}
