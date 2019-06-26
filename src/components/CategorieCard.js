import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import './styles/CategorieCard.css'
 
class CategorieCard extends React.Component {
  render(){
    const { name, photoUrl, id } = this.props
    return(
      <Card className="CategorieCard">
        <Card.Img variant="top" src={photoUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={`/categorie/${id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    )
  }
}

export default CategorieCard;