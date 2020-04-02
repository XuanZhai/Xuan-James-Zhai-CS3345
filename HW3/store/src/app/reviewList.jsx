import React from 'react';
import Rating from './rating'
import ReactDOM from "react-dom";


class ReviewList extends React.Component {
    state = {
        count : this.props.reviews.length,
    }

    render (){
    
    const listItems = this.props.reviews.map((item) =>
        <li className="container bg-white   pt-3 pb-2" key = {item.date + item.userName} style={{ listStyleType: "none" }} >
            <div className="card">
                <div className="card-header pt-3 pb-2" style = {{backgroundColor: " #F0F3F4"}}>
                    <Rating value = {item.rating} />
                </div>
                <div className="card-body" style = {{backgroundColor: "#FDFEFE"}}>
                    <div className="d-flex  w-100 justify-content-between">
                        <p className="text-secondary">{item.userName}</p>
                        <p>{item.date}</p>
                    </div>
                    <p className="mb-1">"{item.comment}"</p>
                </div>
            </div>
        </li>
    );

    return (
        <>
        <h2>Product Reviews ({this.props.reviews.length})</h2>
        <div>{(() => {
            if(this.props.reviews.length === 0){
                return (
                <div className="container  bg-light  pt-3 pb-1">
                    <p className="font-weight-normal">Be the first to add a review!</p>
                </div>
                )
            }
            else{
                return (
                    <ul className="list-group" >{listItems}</ul>
                )
            }
            })()}
        </div>
        </>
        )
    }
}

export default ReviewList