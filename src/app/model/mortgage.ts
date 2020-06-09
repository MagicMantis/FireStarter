import { Item } from './item';

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
    
    get value(): number {
        return this._homeValue - this._mortgageAmount
    }

    get monthlyValue(): number {
        let payment = -(this._monthlyPayment+this._extraPayment)
        if (this._mortgageAmount - payment < 0) payment = -this._mortgageAmount
        return payment
    }

    get monthlyROC(): number {
        return this._annualRate
    }

    copy() : Mortgage {
        return new Mortgage("",
        this.homeValue,
        this.downPayment,
        this.mortgageAmount,
        this.annualRate,
        this.monthlyPayment,
        this.extraPayment)
    }

    simulate() {
        this._homeValue *= (1 + (0.03/12))
        this._mortgageAmount *= (1 + (this._annualRate / 12))
        this._mortgageAmount -= this._monthlyPayment + this._extraPayment
        this._mortgageAmount = Math.max(0, this._mortgageAmount)
    }

}