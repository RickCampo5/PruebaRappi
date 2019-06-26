import axios from 'axios';

class CategorieService {

  getAllCategories() {
    axios.get('data/categories.json')
    .then(res => {
      this.setState({
        categories: res.data.categories
      })
    })
  }

  getOneCategorie(id) {
    axios.get('data/categories.json')
    .pipe(map)

  }
}

export default CategorieService