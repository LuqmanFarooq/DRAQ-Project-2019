import React from 'react'
import Products from './products';
import axios from 'axios';

// class shop
class Store extends React.Component {

    // state with products array
    state = {
        products: []
    };


    // componentDidMount 
    componentDidMount() {
        //axios call
        axios.get('http://localhost:4000/api/products')
            .then((response) => {
                this.setState({ products: response.data.products })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Store</h1>
                <Products myProducts={this.state.products}></Products>
            </div>
        );
    }
}
export default Store;