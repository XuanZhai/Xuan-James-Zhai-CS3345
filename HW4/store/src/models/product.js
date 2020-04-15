


export class Product{
    id;
    name;
    description;
    price;
    imageName;
    reviews;
    constructor(id, name, description, price, imageName, reviews){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageName = imageName;
        this.reviews = reviews;
    }
}