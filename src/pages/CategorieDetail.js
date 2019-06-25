import React from 'react';
import axios from 'axios';

class CategorieDetail extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      categorie: {},
      categorieId: props.match.params.id
    };
  }

  iterate(categories) {
    categories.map(elem => {
      if(elem.id == this.state.categorieId) {
        this.setState({
          categorie: elem
        })
      }
      // if(categorieId === elem.id) {
      //   this.setState({
      //     categorie: elem
      //   })
      // } else {
      //   iterate(elem.sublevels)
      // }
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data/categories.json')
    .then(res => {
      this.iterate(res.data.categories);
      console.log(this.state.categorie);
    })
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default CategorieDetail;