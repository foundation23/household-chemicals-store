import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouters from "./components/AppRouters";
import "./styles/app.css"


const App = () => {
  return (
      <div className="app">
          <BrowserRouter>
              <Header />
              <AppRouters />
              <Footer />
          </BrowserRouter>
      </div>

  );
}

export default App;
