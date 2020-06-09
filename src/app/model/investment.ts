import { PaycheckComponent } from './../items/paycheck/paycheck.component';
import { Item } from './item'

export class Investment extends Item {

    constructor(id: string,
        private _initial: number, 
        private _annualRate: number) {
        super(id);
        this._initial = _initial
        this._annualRate = _annualRate
    }

    get initial() {
        return this._initial
    }

    set initial(x) {
        if (x < 0) x = 0
        this._initial = x
    }

    get annualRate() {
        return this._annualRate
    }

    set annualRate(x) {
        this._annualRate = x
    }

}