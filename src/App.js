import React from 'react';
import Home from './Pagina 1/Home';
import Navbar from './commum/Navbar';
import './index.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Post from './pagina2/Post';

function App() {
  return (  //tudo que tem aqui dentro é HTML
    <div> 

      <BrowserRouter>

        <Navbar></Navbar>
        
        {/* Route é a forma de linkar uma página dentro do app usando a url como caminho */}
        <Route exact="true" path="/">
          <Home></Home>
        </Route>

        <Route path="/postar">
          <Post></Post>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;