import { Item } from './item'

export class Income extends Item {

    constructor(id: string, 
        private _income: number) {
        super(id);
        this._income = _income;
    }

    get income() : number {
        return this._income;
    }

    set income(x){
        this._income = x;
    }

    get value(): number {
        return 0;
    }

    get monthlyValue(): number {
        return this._income;
    }

    get monthlyROC(): number {
        return 0;
    }

    copy() : Item {
        return new Income("", this.income)
    }

    simulate() { }
}