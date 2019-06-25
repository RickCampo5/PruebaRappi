import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

class Carrousel extends React.Component {
  render(){
    const { categories } = this.props

    return(
      <Carousel className="carousell">
        {categories.map(categorie => (
          <Carousel.Item key={categorie.id}>
            <img
              className="d-block w-100"
              src={categorie.photoUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{categorie.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default Carrousel