import React from 'react';
import axios from 'axios';

import Carousel from '../components/Carousel';
import CategorieGrid from '../components/CategorieGrid';
import Banner from '../components/Banner';

import './styles/Home.css';

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios.get('data/categories.json')
    .then(res => {
      this.setState({
        categories: res.data.categories
      })
    })
  }

  render() {
    const { categories } = this.state;

    return(
      <div className="Home">
        <Carousel categories={categories}/>
        <CategorieGrid className="grid-home" categories={categories}/>
        <Banner photoUrl='https://res.cloudinary.com/dfjzvlip6/image/upload/v1559230053/assets/2.jpg'/>
      </div>
    )
  }
}

export default Home;