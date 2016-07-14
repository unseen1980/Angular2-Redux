import { Component } from '@angular/core';
import { BagsComponent } from './bags.component';
import { BagStore } from './bag-store';

@Component({
    moduleId: module.id,
    selector: 'pax',
    templateUrl: 'pax.component.html',
    directives: [BagsComponent]
})

export class PaxComponent {
    chips;    
    constructor(private store: BagStore) { 
        this.chips = this.store.bags;
    }
}