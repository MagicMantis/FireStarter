import { Item } from './item'

enum Period { Bi_monthly = 0, Monthly = 1, Annual = 2 }

export class Investment extends Item {

    constructor(id, 
        private _income: number, 
        private _period: Period) {
        super(id)
        this._income = _income
        this._period = _period
    }

    get income() {
        return this._income
    }

    set income(x) {
        if (x < 0) x = 0
        this._income = x
    }

    get period() {
        return this._period
    }

    set period(x) {
        this._period = x
    }

}