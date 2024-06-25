import { useParams } from "react-router-dom";

import Boards from "../components/Boards";
import datajson from "../logements.json";
import React from "react";
import Carousel from "../components/Carrousel";

function Housing() {
  // extration du paramètre "id" de l'url
  const { id } = useParams();
// logement.id === id est la condition à vérifier : elle retourne true lorsque l'id de l'élément logement correspond à la valeur de id fournie en dehors de cette fonction.

  const logementDatas = datajson.find((logement) => logement.id === id);
  return (
    <div>
      <Carousel pics={logementDatas.pictures} />
      <Boards
        title={logementDatas.title}
        location={logementDatas.location}
        host={logementDatas.host}
        rating={logementDatas.rating}
        description={logementDatas.description}
        equipments={logementDatas.equipments}
        tags={logementDatas.tags}
        
        
      />
    </div>
  );
}

export default Housing;
