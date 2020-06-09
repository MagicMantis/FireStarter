import { Item } from './item';

export class Expense extends Item {
    
    constructor(id, 
        private _cost: number = 0) {
        super(id);
        this._cost = _cost
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

    copy() : Item {
        return new Expense("", this.cost)
    }

    simulate() { }
}