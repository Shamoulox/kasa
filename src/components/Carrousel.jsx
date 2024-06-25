import { useState } from "react";


const Carousel = ({ pics }) => {
  const [index, setIndex] = useState(0);

  const nextPics = () => {
    setIndex(index + 1);
    if (index === pics.length - 1) {
      setIndex(0);
    }
  };

  const prevPics = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(pics.length - 1);
    }
  };

  return (
    <div className="carrousel">
      <img src={pics[index]} alt={pics[index]} />
      {pics.length > 1 && ( 
        // vérifie si la longueur (length) du tableau pics est supérieure à 1.
        // Si c'est le cas (pics.length > 1 est vrai), alors le contenu à l'intérieur des parenthèses (...) sera rendu.
      // Sinon, si pics.length est inférieur ou égal à 1, le contenu à l'intérieur des parenthèses ne sera pas rendu.
        <div className="chevrons">
          <i className="fa-solid fa-chevron-left" onClick={prevPics}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextPics}></i>
          <div></div>
          <p>
            {index + 1} / {pics.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Carousel;