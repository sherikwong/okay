import { Validators, FormBuilder, FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ItemService } from '../../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Extension } from './extension.util';

@Component({
  selector: 'okay-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent extends Extension implements OnInit {
  private randomText = 'hello';
  constructor(
    protected itemService: ItemService,
    protected formBuilder: FormBuilder,
  ) {
    super(formBuilder);
  }

  ngOnInit() {
    this.itemService.query({ id: 1 });

    this.form = this.formBuilder.group({
      'a': ['', Validators.compose([Validators.required, Validators.maxLength(0), this.randomError])]
    });


    this.combineIntoExistingValidators(
      [{ 'maxlength': 'blahblah' }, 'required', {'aff': 'Hahahahha'}]
    );

    this.currentControl.valueChanges.subscribe(val => console.log('Hello'));
  }
}
