import React from 'react';

import ProductCard from './ProductCard'

class ProductGrid extends React.Component {
  render(){
    const { products } = this.props

    return (
      <div className="grid-home">
          {products.map(product => (
            <ProductCard key={product.id} products={product}/>
          ))}
      </div>
    )
  }
}

export default ProductGrid