import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Site/Header';
import Home from './Site/Home/Index';
import Footer from './Site/Footer';
import Sample from './Site/Home/Sample';

const site = () => (
			  <div className="">
	        	  <Header />
				 	<Route exact path="/" component={Home} />
				 <Footer />
			</div>
);


function Routers() {
 return (
	<Router>
     
	     <Route path="/"
	        render={({ match: { url } }) => (
				<div className="">
				 	<Route exact path="/" component={site} />
				 </div>
		    )}
		  />

	  	<Route path="/admin"
	        render={({ match: { url } }) => (
		        <div className="">
		       	 <Route path={`${url}/`} component={Sample} exact />
		    	 </div>
		    )}
		  />


    </Router>
	);

}
export default Routers;