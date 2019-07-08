import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Dashboard/>
      <Product/>
    </div>
  );
}

export default App;
