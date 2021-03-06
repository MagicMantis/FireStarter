import { Item } from './item';

export class Expense extends Item {
    
    constructor(id, 
        private _cost: number = 0) {
        super(id);
        this._cost = _cost
    }

    set cost(x) {
        this._cost = x;
    }
    
    get cost(): number {
        return this._cost
    }

    get value(): number {
        return 0;
    }

    get monthlyValue(): number {
        return -this._cost;
    }

    get monthlyROC(): number {
        return 0;
    }

    copy() : Expense {
        return new Expense("", this.cost)
    }

    simulate() { }
}