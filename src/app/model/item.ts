import { Component } from '@angular/core';
import { ItemComponent } from '../items/item/item.component';
export class Item {

    constructor(protected id: string) {
        this.id = id
    }

    get component() : any {
        return ItemComponent
    }

}