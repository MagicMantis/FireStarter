import { Item } from './item'

export class Investment extends Item {

    constructor(id: string,
        private _initial: number = 0, 
        private _annualRate: number = 0,
        private _additionalContrib: number = 0) {
        super(id);
        this._initial = _initial
        this._annualRate = _annualRate
        this._additionalContrib = _additionalContrib
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

    get additionalContrib() {
        return this._additionalContrib
    }

    set additionalContrib(x) {
        this._additionalContrib = x
    }

    get value(): number {
        return this._initial
    }
    
    get monthlyValue(): number {
        return -this._additionalContrib;
    }

    get monthlyROC(): number {
        return this._annualRate
    }

    copy() : Investment {
        return new Investment("", 
            this.initial, 
            this.annualRate, 
            this.additionalContrib)
    }

    simulate() { 
        this._initial = this._initial * (1 + this.annualRate/100)
        this._initial += this._additionalContrib
    }
}