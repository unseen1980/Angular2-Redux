import { Component } from '@angular/core';
import { BagStore } from './bag-store';
import {addBag, removeBag} from './actions'

@Component({
    moduleId: module.id,
    selector: 'bags',
    templateUrl: 'bags.component.html'
})

export class BagsComponent {
    bagTypes = [
        { size: 'Small', price: 10 },
        { size: 'Medium', price: 20 },
        { size: 'Large', price: 30 },
    ];

    constructor(private store: BagStore) {
    }

    addBag(size, price) {
        this.store.dispatch(addBag(size, price));
    }

    removeBag(size, price) {
        this.store.dispatch(removeBag(size, price));
    }

}