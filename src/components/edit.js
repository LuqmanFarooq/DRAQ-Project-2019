import React from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';
class Edit extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {Name:'',
                      Price:'',
                    Poster:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
        this.handleProductPosterChange = this.handleProductPosterChange.bind(this);
      }
      
      componentDidMount(){
            axios.get('http://localhost:4000/api/products/'+this.props.match.params.id)
            .then((response)=>{
                this.setState({
                    Name:response.data.name,
                    Price:response.data.price,
                    Poster:response.data.poster,
                    _id:response.data._id
                })
            })
            .catch()
      }

      handleProductNameChange(e){
        this.setState({Title: e.target.value});
      }
    
      handleProductPriceChange(e){
        this.setState({Year: e.target.value});
      }
    
      handleProductPosterChange(e){
        this.setState({Poster: e.target.value});
      }
    
      handleSubmit(e){
        alert(this.state.Name+ "      " + this.state.Price 
        +"       "+ this.state.Poster);
        e.preventDefault();
        
                    const newProduct = {
                      name: this.state.Name,
                      price: this.state.Price,
                      poster: this.state.Poster
                    };
               
        axios.put('http://localhost:4000/api/products/'+this.state._id,newProduct)
        .then()
        .catch();            
      }
    render(){
        return(
            <div>
        <h1>Hello from edit component</h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Product Name</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Name}
          onChange={this.handleProductNameChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Product Price</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Price}
          onChange={this.handleProductPriceChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Product Poster Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Poster}
          onChange={this.handleProductPosterChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Add Product">
          </input>
        </div>
        </form>
      </div>
        )
    }
}

export default Edit;