import React from 'react'
import Products from './products';
import axios from 'axios';


class Read extends React.Component{

    state = {
        products: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/products')
        .then((response)=>{
            this.setState({products: response.data.products})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1>SHOP</h1>
                <Products myProducts={this.state.products}></Products>
            </div>
        );
    }
}
export default Read;