import { Item } from './item';

export class Mortgage extends Item {

    constructor(id: string,
        private _homeValue: number = 0,
        private _downPayment: number = 0,
        private _mortgageAmount: number = 0,
        private _annualRate: number = 4,
        private _monthlyPayment: number = 0,
        private _extraPayment: number = 0) {
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

    set homeValue(x) {
        this._homeValue = x;
    }

    get downPayment() {
        return this._downPayment
    }

    set downPayment(x) {
        this._downPayment = x;
    }

    get mortgageAmount() {
        return this._mortgageAmount
    }

    set mortgageAmount(x) {
        this._mortgageAmount = x;
    }

    get annualRate() {
        return this._annualRate
    }

    set annualRate(x) {
        this._annualRate = x;
    }

    get monthlyPayment() {
        return this._monthlyPayment
    }

    set monthlyPayment(x) {
        this._monthlyPayment = x;
    }

    get extraPayment() {
        return this._extraPayment
    }

    set extraPayment(x) {
        this._extraPayment = x;
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
        this._mortgageAmount *= (1 + (this._annualRate / 100 / 12))
        this._mortgageAmount -= this._monthlyPayment + this._extraPayment
        this._mortgageAmount = Math.max(0, this._mortgageAmount)
    }

    dumpLog() {
        console.log("Home Value", this.homeValue)
        console.log("Down payment", this.downPayment)
        console.log("Mortgage Amount", this.mortgageAmount)
        console.log("Annual Rate", this.annualRate)
        console.log("Monthly Rate", this.monthlyPayment)
        console.log("Extra Payment", this.extraPayment)
    }

}