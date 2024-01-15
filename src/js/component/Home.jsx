import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import  Footer  from "./Footer.jsx";


//create your first component
const Home = () => {
  const cardProps = [
    {title:'Card 1', subtitle:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', image:'https://magazine.artland.com/wp-content/uploads/2022/07/van-gogh-starry-night-min.jpg'},
    {title:'Card 2', subtitle:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image:'https://www.angelaedwards.co.uk/wp-content/uploads/2022/07/The_Persistence_of_Memory-1024x754-1.jpeg'},
    {title:'Card 3', subtitle:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image:'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Vincent-van-Gogh-Whaet-Field-with-Cypresses.-Image-via-wikimedia.org_.jpg'},
    {title:'Card 4', subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image:'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0Mzg2NDM0MDYzNzM4MjE2/fascinating-facts-about-ten-famous-paintings.jpg'}
  ]
  return (
    <div>
      <Navbar />
      <Jumbotron />
        <Card properties={cardProps} />
      <Footer />
    </div>
  );
};

export default Home;

