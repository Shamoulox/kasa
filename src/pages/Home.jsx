import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import imgbanner from "../Assets/images/imgbanner.png";
import datajson from "../logements.json";

function Home() {
  return (
    <div className="container_home">
      <Banner
        titleBanner="Chez vous, partout et ailleurs"
        imgBanner={imgbanner}
      ></Banner>
      <div className="container_cards">
        
        {datajson.map((data) => (
          <Cards
            key={data.id}
            id={data.id}
            cover={data.cover}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
