import React from 'react';

import Card from 'react-bootstrap/Card';

import './styles/CategorieCard.css'

function Avaiability(props) {
  if(props.available) {
    return(
      <Card.Text>Disponible</Card.Text>
    )
  }
  return(
    <Card.Text>No Disponible</Card.Text>
  )
}

function BuyButton(props) {
  if(props.available) {
    return(
      <p  className="btn btn-success">Agregar al carrito</p>
    )
  }
  return(
    <p className="btn btn-secondary" disabled>Agregar al carrito</p>
  )
}
 
class ProductCard extends React.Component {
  render(){
    const { name, price, available, quantity } = this.props.products;
    return(
      <Card className="CategorieCard">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{quantity}</Card.Text>
          <Avaiability available={available}/>
          <BuyButton available={available}/>
        </Card.Body>
      </Card>
    )
  }
}

export default ProductCard;