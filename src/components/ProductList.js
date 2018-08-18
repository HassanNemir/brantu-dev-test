import React, { Component } from 'react';
import Product from './Product';
import './css/ProductList.css'
class ProductList extends Component {
    
    render() {
        const products = this.props.products.map(product => {
            if (product.name.toLowerCase().indexOf(this.props.productName.toLowerCase()) !== -1
                && this.props.productName !== '') {
                return <Product key={product._id}
                    name={product.name}
                    image={product.image}
                    price={product.price} />
            }
            return null;
        })
        return (
           
            <div id="ProductList" className="grid-container">
                {products}
            </div>
        );
    }
}

export default ProductList;