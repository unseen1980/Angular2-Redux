export class Bag {
    type: String;
}

export class BagStore {
    bags: Bag[];

    constructor() {
        this.bags = [];
    }

    addBag(bag: String) {
        this.bags.push({
            type: bag
        });
    }

    removeBag(bag: Bag) {
        for (var index = 0; index < this.bags.length; index++) {
            var element = this.bags[index];
            if( <any>bag === this.bags[index].type){
                this.bags.splice(index, 1);
                break;
            }            
        }
    }
}
