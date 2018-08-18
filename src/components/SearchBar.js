import React, { Component } from 'react';
import './css/SearchBar.css'


class SearchBar extends Component {
    render() {
        return (
            <input type="text" placeholder="Product Name" onChange={this.props.click}/>
        );
    }
}
export default SearchBar;