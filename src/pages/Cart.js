import React from 'react';

import './styles/Cart.css'

class Cart extends React.Component{
  render(){
    let { products } = this.props
    if(!products) {
      return(
        <div className="Cart">
          <h1>No haz añadido productos</h1>
        </div>
      )
    }
    return(
      <div className="Cart">
        <ul>
          {products.map(product => {
            return(
              <li key={product.id}>
                {`${product.name} - ${product.price}`}
              </li>
            )
          })}
        </ul>
        <p>Total</p>
      </div>
    )
  }
}

export default Cart;