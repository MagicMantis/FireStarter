import { Income } from './income'

enum Period { Bi_monthly = 0, Monthly = 1, Annual = 2 }

export class Paycheck extends Income {

    constructor(id, 
        private _salary: number = 0, 
        private _period: Period = 2) {
        super(id, _salary/12)
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

    get income() : number {
        return this.salary/12;
    }
}