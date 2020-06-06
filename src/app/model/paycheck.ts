import { Income } from './income'
import { Item } from './item'

enum Period { Bi_monthly = 0, Monthly = 1, Annual = 2 }

export class Paycheck extends Item implements Income {

    constructor(id, 
        private _salary: number, 
        private _period: Period) {
        super(id)
        this._salary = _salary
        this._period = _period
    }

    get salary() {
        return this._salary
    }

    set salary(x) {
        if (x < 0) x = 0
        this._salary = x
    }

    get period() {
        return this._period
    }

    set period(x) {
        this._period = x
    }

    get income() {
        return this.salary/12;
    }
}