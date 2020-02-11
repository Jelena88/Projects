import React from 'react';
import Header from './layout/header';
import Content from './layout/content';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './layout/footer';


function App() {
    
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
