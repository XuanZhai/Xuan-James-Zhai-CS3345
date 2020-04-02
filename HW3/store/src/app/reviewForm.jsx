import React from 'react'
import ReactDOM from 'react-dom';
import Rating from './rating'
import { ProductReview } from '../models/productreview';


class ReviewForm extends React.Component {

    state = {
        userName: "name",
        rating : "0",
        comment : "comment",
    }
    
    ResetForm = () => {
        this.setState({userName: "name", rating : "0", comment : "comment",});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.ResetForm();
    }

    handleClick = () =>{
        let newDate = new Date()
        let date = newDate.getDate();
        let monthNumber = (new Date().getMonth());
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let monthName = monthNames[monthNumber];
        let year = newDate.getFullYear();
        this.props.Onchange(new ProductReview(this.state.userName, this.state.rating, this.state.comment, monthName + "," + date + "," + year));
    }

    render(){ 
        return(
            <div className ="card mt-4">
                <div className = "card-header bg-secondary text-white">
                    <h3 >Add Review</h3>
                </div>

                <div className = "card-body">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className = "row">
                            <div className = "col-sm-8">
                                <label htmlFor="yourname">Your Name</label>
                            </div>
                            <div className = "col">
                                <label htmlFor="yourrate">Rating</label>
                            </div>
                        </div>

                        <div className = "row">
                            <div className = "col-sm-8">
                                <div className="input-group mb-3">
                                    <input type="text" id="yourname" className="form-control" onChange={e => this.setState({ userName: e.target.value })} />
                                </div>
                            </div>
                            <div className = "col">
                                <select className="custom-select" onChange={e => this.setState({ rating: e.target.value })}>
                                    <option defaultValue> </option>
                                    <option value = "1">1 star</option>
                                    <option value = "2">2 stars</option>
                                    <option value = "3">3 stars</option>
                                    <option value = "4">4 stars</option>
                                    <option value = "5">5 stars</option>
                                </select>
                            </div>
                            <div className = "col">
                            <Rating value = {this.state.rating}/>
                            </div>
                        </div>

                        <div className = "row">
                            <div className = "col">
                                <label htmlFor="yourcomment">Comment:</label>
                            </div>
                        </div>

                        <div className = "row">
                            <div className = "col">
                                <textarea type="text" className="form-control" id="yourcomment" rows="4" cols="50" onChange={e => this.setState({ comment: e.target.value })}/><br />
                            </div>
                        </div>

                        <div className = "row">
                            <div className = "col">
                            <button className="btn btn-info" onClick= {this.handleClick.bind(this)}>Submit</button>
                            </div>
                        </div>                    
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewForm