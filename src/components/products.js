import React from 'react';
import Item from './item';
import './products.css';
class Products extends React.Component {
    // constructor 
    constructor() {
        super();
        // setting search state to empty initially
        this.state = {
            search: ''
        }
        this.updateSearch = this.updateSearch.bind(this);
    }
    // function for onchange for search input box
    updateSearch(e) {
        this.setState({ search: e.target.value })
    }
    // render 
    render() {
        // variable in with filterd objects are stored
        let filteredProducts = this.props.myProducts.filter((product) => {
            return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        });

        return (
            <div>
                <div className="pro-wrapper">
                    <div className="pro-form-wrapper">
                        <form>
                            <div className='search'>
                                <input id="ip2" type="text" placeholder="Search Product By Name..." value={this.state.search} onChange={this.updateSearch}></input>
                            </div>
                        </form>
                    </div></div>
                <div>
                    <br></br>

                    {filteredProducts.map((product) => {
                        return <Item key={product._id}
                            product={product}></Item>
                    })}
                </div>

            </div>
        )
    }
}
export default Products;