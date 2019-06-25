import React from 'react';
import { Link } from 'react-router-dom'

import './styles/Banner.css'

class Banner extends React.Component {
  render(){
    const { id, photoUrl } = this.props

    let style = {
      backgroundImage: `url(${photoUrl})`
    }

    return(
      <div className="Banner">
        <Link className="Banner_img" to={`/producto/${id}`} style={style}></Link>
      </div>
    )
  }
}

export default Banner