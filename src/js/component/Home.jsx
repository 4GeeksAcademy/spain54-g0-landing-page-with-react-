import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import { render } from "react-dom";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer/>
    </div>
  );
};

export default Home;

ReactDOM.render(<Home />, document.querySelector("#app"));