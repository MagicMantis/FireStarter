import { Income } from './income'

describe('Income', () => {
    it('should have proper return values', () => {
        let income = new Income("");
        expect(income.income).toBe(0);
        income.income = 300
        expect(income.income).toBe(300);
        expect(income.monthlyValue).toBe(300);
        expect(income.monthlyROC).toBe(0);
        expect(income.value).toBe(0);
    });

    it('copy should have same value', () => {
        let income = new Income("");
        let income2 = income.copy();
        expect(income.income == income2.income)
    });

    it('simulate should not change value', () => {
        let income = new Income("", 300);
        expect(income.income).toBe(300);
        expect(income.monthlyValue).toBe(300);
        income.simulate();
        expect(income.income).toBe(300);
        expect(income.monthlyValue).toBe(300);
    });
})