import React from 'react';

import CategorieCard from './CategorieCard'

class CategorieGrid extends React.Component {
  render(){
    const { categories } = this.props

    return (
      <div className="grid-home">
          {categories.map(categorie => (
            <CategorieCard key={categorie.id} name={categorie.name} photoUrl={categorie.photoUrl} id={categorie.id}/>
          ))}
      </div>
    )
  }
}

export default CategorieGrid