import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Home } from './pages/Home'
import { Article } from './pages/Article'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <div className="container-fluid p-0 h-100">
              <Routes>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/article'} component={Article}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;