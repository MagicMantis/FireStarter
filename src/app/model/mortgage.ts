import { Item } from './item';
import { MortgageComponent } from '../items/mortgage/mortgage.component';

export class Mortgage extends Item {

    constructor(id: string,
        private _homeValue: number,
        private _downPayment: number,
        private _mortgageAmount: number,
        private _annualRate: number,
        private _monthlyPayment: number,
        private _extraPayment: number) {
        super(id);
        this._homeValue = _homeValue;
        this._downPayment = _downPayment;
        this._mortgageAmount = _mortgageAmount;
        this._annualRate = _annualRate;
        this._monthlyPayment = _monthlyPayment;
        this._extraPayment = _extraPayment;
    }

    get homeValue() {
        return this._homeValue
    }

    get downPayment() {
        return this._downPayment
    }

    get mortgageAmount() {
        return this._mortgageAmount
    }

    get annualRate() {
        return this._annualRate
    }

    get monthlyPayment() {
        return this._monthlyPayment
    }

    get extraPayment() {
        return this._extraPayment
    }

    get component() : any {
        return MortgageComponent
    }

}