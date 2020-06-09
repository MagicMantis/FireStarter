import { Item } from './item'
import { IncomeComponent } from '../items/income/income.component';

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
}