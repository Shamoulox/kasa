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