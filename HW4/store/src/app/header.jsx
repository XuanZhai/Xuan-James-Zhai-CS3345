import React from 'react';
import {Link} from "react-router-dom";


class Header extends React.Component {
    state = {
    }



    render(){
        return(
        <Link className = " btn btn-block text-left text-light" style = {{backgroundColor: "#343a40"}} to = "/"><h3>Store</h3></Link>
        )}
    }


export default Header