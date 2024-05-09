import React from 'react';
import Banner from "../components/Banner";
import Cards from "../components/Cards";

function Home() {
  return (
    <div className='container_home'>
      
      <Banner titleBanner="Chez vous, partout et ailleurs"></Banner>
      <div className="container_cards">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>

        
        
        
      
      
      </div>
    </div>
  );
}

export default Home;