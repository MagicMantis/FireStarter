import { Item } from './item';
import { ExpenseComponent } from '../items/expense/expense.component';

export class Expense extends Item {
    
    constructor(id, 
        private _cost: number) {
        super(id);
        this._cost = _cost
    }

    get component() : any {
        return ExpenseComponent
    }

    get cost(): number {
        return this._cost
    }

}