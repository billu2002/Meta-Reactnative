import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import './index.css';


function Home() {
  return (
    
      <>
        <Navigation />

        <main>
            <Hero />
            <Specials />
            <Ratings />
            <Description />
        </main>

        <Footer />


      </>

  );
}

export default Home;