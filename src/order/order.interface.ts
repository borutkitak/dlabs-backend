export interface IOrder {
    readonly orderId: string,
    readonly tableId: string,
    readonly foods: [],
    readonly drinks: [],
    readonly drinkPrepared: boolean,
    readonly foodPrepared: boolean,
    readonly drinkServed: boolean,
    readonly foodServed: boolean,
    readonly paid: boolean,
}