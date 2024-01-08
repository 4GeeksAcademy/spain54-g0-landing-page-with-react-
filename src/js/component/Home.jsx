import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { render } from "react-dom";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default Home;

ReactDOM.render(<Home />, document.querySelector("#app"));
