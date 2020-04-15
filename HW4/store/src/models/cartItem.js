

export class CartItem{
    product;
    quantity;
    totalPrice;
    constructor(product,quantity,totalPrice){
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}