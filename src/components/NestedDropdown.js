import React from 'react';
import { Link } from 'react-router-dom';

import NavDropdown from 'react-bootstrap/NavDropdown';

class NestedDropdown extends React.Component {
  innerDropdown = (item) => {
    if(item.sublevels) {
      return(
        <ul className="NavbarApp_List" key={item.id}>
          <li>
            <Link to={`/categorie/${item.id}`}>
              {item.name}
            </Link>
            {item.sublevels.map(this.innerDropdown)}
          </li>
        </ul>
      )
    }
    return (
      <ul className="NavbarApp_List" key={item.id}>
        <li>
          <Link to={`/categorie/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        </li>
      </ul>
    )
  }

  render() {
    const { categories } = this.props;

    return(
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        {categories.map(this.innerDropdown)}
      </NavDropdown>
    )
  }
}

export default NestedDropdown;