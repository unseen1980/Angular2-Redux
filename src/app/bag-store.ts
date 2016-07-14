export class Bag {
    type: String;
    price: Number;
}

export class BagStore {
    bags: Bag[];

    constructor() {
        this.bags = [];
    }

    addBag(bag: Bag) {
        this.bags.push({
            type: bag.type,
            price: bag.price
        });
        console.log(this.bags);
    }

    removeBag(bag: Bag) {
        for (var index = 0; index < this.bags.length; index++) {
            if( bag.type == this.bags[index].type){
                this.bags.splice(index, 1);
                break;
            }            
        }
        console.log(this.bags);
    }
}
