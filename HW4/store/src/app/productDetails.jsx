import React from 'react';
import ReviewList from './reviewList'
import {Link} from 'react-router-dom'
import ReviewForm from './reviewForm';
import { ProductRepository } from '../api/productRepository'
import CartService  from '../services/cartService'
import Header from './header';

class ProductDetails extends React.Component {

    productRepository = new ProductRepository()
    cartService = new CartService();

    state = {
        catagoryId: null,
        description: "",
        id: "",
        imageName: "",
        name: "",
        price: 0,
        reviews: [],
    }


    onReviewAdded(newReview){                                            // Add new Review to the Review List
        this.setState(prevState => {
            for(let i = 0; i < prevState.reviews.length; i++){
                if(prevState.reviews[i] == newReview){
                    return prevState;
                }
            }
            prevState.reviews.push(newReview);
            return prevState;
          });
          this.productRepository
          .addReview(this.state.id, newReview)
          .then(() => {
                alert("Review Updated")
          });
    }

    render () {
      return (
        <div className ="container" >
            <header>           
                <Header />         
                <ul className="breadcrumb" >
                    <li className="breadcrumb-item"><a href="/"><h5 className = "font-italic">Tasty snacks </h5></a></li>
                    <li className="breadcrumb-item active" aria-current="page">{this.state.name}</li>
                </ul>
            </header>
            <div className="jumbotron bg-light ">
                <div className ="container">
                    <div className = "row">
                        <div className = "col-sm">
                            {(() => {
                                if(this.state.imageName != ""){
                                    return (<img src= {"http://johnlawrimore.com/smu/" + this.state.imageName} alt="Smiley face" />)
                                }
                            })()}
                        </div>
                        <div className = "col-sm">
                            <h3 className="display-4">{this.state.name}</h3>
                            <h3><span className="badge badge-info">${this.state.price}</span></h3>
                            <p className="lead">{this.state.description}</p>
                            <Link className= "btn btn-warning" style = {{marginTop : "150px", marginLeft : "350px"}} to = {'/cart'} onClick = {() => this.cartService.addToCart(this.state)}>Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewList reviews = {this.state.reviews} /> 
            <ReviewForm Onchange = {newreview => this.onReviewAdded(newreview)} />
        </div>
      )
    }

    componentDidMount(){
        let productid = +this.props.match.params.productId;
        if(productid){
            this.productRepository.getProduct(productid)
                .then(product => this.setState(product));
        }
    }
}




export default ProductDetails