import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CategorieDetail from './pages/CategorieDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/product/:id' component={ProductDetail}/>
          <Route path='/categorie/:id' render={(props) => <CategorieDetail categorieId={props.match.params.id}{...props}/>}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
