import { Component } from '@angular/core';
import { BagsComponent } from './bags.component';
import { BagStore } from './bag-store';
import { removeBag, removeAll } from './actions';

@Component({
    moduleId: module.id,
    selector: 'pax',
    templateUrl: 'pax.component.html',
    directives: [BagsComponent]
})

export class PaxComponent {
    origin: String = 'Dublin';
    destination: String = 'San Francisco';
    class: String = 'Economy';
    title: String = 'Mr.';
    firstName: String = 'Joe';
    lastName: String = 'Blogs';

    constructor(private store: BagStore) { }

    removeBag(size, price) {
        this.store.dispatch(removeBag(size, price));
    }

    removeAll() {
        this.store.dispatch(removeAll());
    }
}
