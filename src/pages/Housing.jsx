import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Boards from "../components/Boards";
import datajson from "../logements.json";
import React from "react";




function Housing() {
    const { id } = useParams();
    const logementDatas = datajson.find((logement) => logement.id === id)
  return (

    <div>
      <Banner></Banner>
      <Boards
        title={logementDatas.title}
        location={logementDatas.location}
        host={logementDatas.host}
        rating={logementDatas.rating}
      />
      
    </div>
  );
}

export default Housing;
