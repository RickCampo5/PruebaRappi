import React from 'react';
import axios from 'axios';

import NavbarApp from './NavbarApp';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      logged: false,
      categories: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data/categories.json')
    .then(res => {
      this.setState({
        userData: {id: 265485, username: 'Ricardo'},
        logged: true,
        categories: res.data.categories
      })
    })
  }

  render() {
    const { userData, logged, categories } = this.state

    return(
      <React.Fragment>
        <NavbarApp log={logged} userData={userData} categories={categories}/>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;