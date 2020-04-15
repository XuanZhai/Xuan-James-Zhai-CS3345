import React from 'react'
import './rating.css'
import ReactDOM from 'react-dom';

class Rating extends React.Component{
    render(){
        return(
            <span className = "stars"> {
                [1,2,3,4,5].map(x => (<i key={x} className={(x > this.props.value ? 'empty-star' : 'full-star')}></i>))
            }
            </span>
        )
    }
}

export default Rating