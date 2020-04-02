


export class Product{
    id;
    name;
    description;
    price;
    imageUrl;
    reviews;
    constructor(id, name, description, price, imageUrl, reviews){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.reviews = reviews;
    }
}