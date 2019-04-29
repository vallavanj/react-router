import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './pages/Header';
import Footer from './pages/Footer';

import Home from './pages/Home/Index';



function Routers() {
 return (
	<Router>
      <div>
        <Header />
		 <Route exact path="/" component={Home} />
         <Footer />
      </div>
    </Router>
	);

}
export default Routers;