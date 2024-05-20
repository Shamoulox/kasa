import React from "react";
import Banner from "../components/Banner";
import SelectorAbout from "../components/SelectorAbout";
import imgBanner2 from "../Assets/images/imgbanner2.png";


function About () {
  return (
    <div>
   <Banner imgBanner={imgBanner2}></Banner>
   <div className="container_selector">
   <SelectorAbout title="Fiabilité"text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."></SelectorAbout>
   <SelectorAbout title="Respect"text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."></SelectorAbout>
   <SelectorAbout title="Service"text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."></SelectorAbout>
   <SelectorAbout title="Sécurité"text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurités établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."></SelectorAbout>
   </div>
   

    </div>
  );
};

export default About;
