export abstract class Item {

    constructor(protected id: string) {
        this.id = id
    }

    abstract value: number
    abstract monthlyValue: number
    abstract monthlyROC: number //rate of change
    abstract copy(): Item
    abstract simulate()

}