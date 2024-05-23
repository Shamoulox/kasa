import Star from "../Assets/images/star.png"
import emptyStar from "../Assets/images/empty_star.png"

const Rating = ({ rating }) => {
    const ratingRange = [1, 2, 3, 4, 5];
    // Vérification du type de rating et affichage pour le débogage
  const ratingValue = typeof rating === 'number' ? rating : parseInt(rating, 10);
  console.log("Rating value:", ratingValue);
  
    return (
      <div className="rating_stars">
        {ratingRange.map((rangeElem) => (
          <img
            className="stars"
            key={rangeElem.toString()}
            src={ratingValue >= rangeElem ? Star : emptyStar}
            alt="rating"
          />
        ))}
      </div>
    );
  };

  export default Rating