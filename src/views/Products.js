import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import './css/Products.css';
import axios from 'axios';


class Products extends Component {
    state = {
        products: [],
        searchProducts: '',
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/product/').then(
            response => {
                this.setState({ products: response.data })
            }
        )
    }
    searchText = (e) => {
        this.setState({ searchProducts: e.target.value })
    };
    render() {
        return (
            <div id='Products'>
                <SearchBar click={this.searchText} />

                {this.state.searchProducts ?
                    <ProductList productName={this.state.searchProducts} products={this.state.products} /> : null
                }
            </div>
        );
    }
}
export default Products;