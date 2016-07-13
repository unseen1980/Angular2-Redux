import { Component } from '@angular/core';
import {BagStore} from './bag-store'

@Component({
    moduleId: module.id,
    selector: 'pax',
    templateUrl: 'pax.component.html'
})

export class PaxComponent {
    constructor(private store: BagStore) { }

    addBag(bag) {
        this.store.addBag(bag);
    }

    removeBag(bag) {
        this.store.removeBag(bag);
    }
}