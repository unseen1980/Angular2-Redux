import { Component } from '@angular/core';
import { BagStore } from './bag-store';

@Component({
    moduleId: module.id,
    selector: 'bags',
    templateUrl: 'bags.component.html'
})

export class BagsComponent {
    bagTypes = [
        { type: 'Small', price: 10 },
        { type: 'Medium', price: 20 },
        { type: 'Large', price: 30 },
    ];

    constructor(private store: BagStore) {
    }

    addBag(bag) {
        this.store.addBag(bag);
    }

    removeBag(bag) {
        this.store.removeBag(bag);
    }

}