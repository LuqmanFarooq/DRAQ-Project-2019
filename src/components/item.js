import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Item extends React.Component {



  constructor() {
    super();

    this.DeleteProduct = this.DeleteProduct.bind(this);
  }
  // delete method 
  DeleteProduct(e) {
    console.log("delete clicked");
    axios.delete("http://localhost:4000/api/products/" + this.props.product._id)
      .then()
      .catch();
    // RELOADS THE CURRENT PAGE AFTER DELETE
    window.location.reload(true);
  }

  render() {

    return (
      <div>
        <Card border="primary" style={{ width: window.innerWidth }}>
          <Card.Header style={{ fontWeight: "bold", fontSize: "20px", backgroundColor: "#1e90ff" }}>{this.props.product.name}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.product.poster}></img>
              <footer style={{ fontWeight: "bold", fontSize: "20px" }}>
                {this.props.product.price}
              </footer>
            </blockquote>
          </Card.Body>
          <Button variant="danger" onClick={this.DeleteProduct}>Delete</Button>
          <Link to={"/edit/" + this.props.product._id} className="btn btn-success">Edit</Link>
        </Card>
        <br></br>
      </div>
    )
  }
}
export default Item;