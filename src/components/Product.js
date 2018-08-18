import React, { Component } from 'react';
import './css/Product.css'

class Product extends Component{
    render(){
        return(
            <div id= 'Product' className = "grid-item"> 
                <img src={this.props.image} alt = {this.props.name} />
                <h4>{this.props.price}$</h4>
               <p> {this.props.name} </p>               
            </div>
        );
    }
}

export default Product;