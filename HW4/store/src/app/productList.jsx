import React from 'react';
import{Link} from 'react-router-dom'
import { ProductRepository } from '../api/productRepository'
import Header from './header';
import CartService  from '../services/cartService'

class ProductList extends React.Component {

    productsRepository = new ProductRepository();
    cartService = new CartService();

    state = {
        products: [],
    }


    render(){
        return(
            <div className = "container">
                <header>        
                    <Header/>           
                    <ul className="breadcrumb" >
                        <li className="breadcrumb-item  active" aria-current="page"><h5 className = "font-italic">Tasty snacks</h5></li>
                    </ul>
                </header>

                <div className="card-deck">
                    {this.state.products.map((i) =>
                        <div className = "card" key = {i.id}>
                            <div className = "card-body">
                                <div className = "row align-items-end">
                                    <div className = "col">
                                        <img className = "card-img" src = {"http://johnlawrimore.com/smu/" + i.imageName} />
                                    </div>
                                    <div className = "col-sm-4">
                                        <h5><span className = "badge badge-success">${i.price}</span></h5>
                                    </div>
                                </div>
                                <h4 className = "card-title mt-2">{i.name}</h4>
                            </div>
                            <div className = "card-footer border-top-0" style = {{backgroundColor: "white"}}>
                                <Link to = {'/products/' + i.id } className = "btn btn-info form-control">Product Details</Link> <br/>
                                <Link className = "btn btn-warning form-control mt-2" to = {'/cart'} onClick = {() => this.cartService.addToCart(i)}>Add to Cart</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.productsRepository.getProducts()
            .then(products => this.setState({products}))
    }
}


export default ProductList
