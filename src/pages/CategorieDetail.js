import React from 'react';
import axios from 'axios';

import CategorieGrid from '../components/CategorieGrid';
import '../pages/styles/CategorieDetail.css'
import ProductGrid from '../components/ProductGrid';

class CategorieDetail extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      categorie: {},
      products: []
    };
  }

  iterateCategories(categories) {
    categories.forEach(elem => {
      if(elem.id == this.props.categorieId) {
        this.setState({
          categorie: elem
        })
      } else if(elem.sublevels) {
        this.iterateCategories(elem.sublevels)
      }
    })
  }

  iterateProducts(products) {
    let productsArray = []
    products.forEach(elem => {
      if(elem.sublevel_id == this.props.categorieId) {
        productsArray.push(elem)
        this.setState({
          products: productsArray
        })
      } 
    })
  }

  componentDidUpdate(nextProps) {
    if(nextProps.match.params.id !== this.props.match.params.id) {

      this.setState({
        categorie: {},
        products: []
      })

      axios.get('http://localhost:3000/data/categories.json')
      .then(res => {
        this.iterateCategories(res.data.categories);
      })

      axios.get('http://localhost:3000/data/products.json')
      .then(res => {
        this.iterateProducts(res.data.products);
      })
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data/categories.json')
    .then(res => {
      this.iterateCategories(res.data.categories);
    })

    axios.get('http://localhost:3000/data/products.json')
    .then(res => {
      this.iterateProducts(res.data.products);
    })
  }

  render() {
    let { categorie, products } = this.state;

    if(categorie.sublevels) {
      return(
        // <div></div>
        <div className="categorie">
          <h1>{categorie.name}</h1>
          <h3>Subcategorias</h3>
          <CategorieGrid className="grid-categorie" categories={categorie.sublevels}/>
          <h3>Productos</h3>
          <div className>

          </div>
          <ProductGrid className="grid-categorie" products={products}/>
        </div>
      )
    } 
    return(
      <div className="categorie">
        <h1>{categorie.name}</h1>
        <h3>Productos</h3>
        <ProductGrid className="grid-categorie" products={products}/>
      </div>
    )
  }
}

export default CategorieDetail;