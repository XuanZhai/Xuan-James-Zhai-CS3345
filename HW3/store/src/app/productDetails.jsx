import React from 'react';
import {Product} from '../models/product'
import ReviewList from './reviewList'
import ReactDOM from "react-dom";
import ReviewForm from './reviewForm';

class ProductDetails extends React.Component {
        state = {
            product : new Product (
                1,
                "Jif Peanut Butter, 40 ounce",
                "7g of Protein per serving with no preservatives, artifical flavors or colors.",
                7.99,
                "http://johnlawrimore.com/smu/101.png",
                []
           ),
        }

    onReviewAdded(newReview){                                            // Add new Review to the Review List
        this.setState(prevState => {
            for(let i = 0; i < prevState.product.reviews.length; i++){
                if(prevState.product.reviews[i] == newReview){
                    return prevState;
                }
            }
            prevState.product.reviews.push(newReview);
            return prevState;
          });
    }

    render () {
      return (
        <div className ="container" >
            <header>                                
                <ul className="breadcrumb" >
                    <li className="breadcrumb-item"><a href="#">Tasty snacks </a></li>
                    <li className="breadcrumb-item active" aria-current="page">Jif Peanut Butter, 40 ounce</li>
                </ul>
            </header>
            <div className="jumbotron bg-light ">
                <div className ="container">
                    <div className = "row">
                        <div className = "col-sm">
                            <img src= {this.state.product.imageUrl} alt="Smiley face" />
                        </div>
                        <div className = "col-sm">
                            <h2 className="display-4">{this.state.product.name}</h2>
                            <h3><span className="badge badge-primary">${this.state.product.price}</span></h3>
                            <p className="lead">{this.state.product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewList reviews = {this.state.product.reviews} /> 
            <ReviewForm Onchange = {newreview => this.onReviewAdded(newreview)} />
        </div>
      )
    }
}

export default ProductDetails