import  emptyStar from "../Assets/images/star.png"
import Star from "../Assets/images/empty_star.png"

const Rating = ({ rating }) => {
    const ratingRange = [1, 2, 3, 4, 5];
    // Vérification du type de rating et affichage pour le débogage
    //  Assure que ratingValue est numérique, quel que soit son type initial (nombre ou chaîne).
  const ratingValue = typeof rating === 'number' ? rating : parseInt(rating, 10);
  console.log("Rating value:", ratingValue);
  
    return (
      <div className="rating_stars">
        {/*  Utilisation de .map() pour générer dynamiquement des images d'étoiles en fonction des valeurs de ratingRange. */}
        {ratingRange.map((rangeElem) => (
          // Chaque élément dans ratingRange est utilisé comme clé. Il est important que chaque élément ait une clé unique lors du rendu d'une liste dynamique en React.
          <img
            className="stars"
            key={rangeElem.toString()}
            src={ratingValue >= rangeElem ? Star : emptyStar}
            //  Détermine si une étoile pleine (Star) ou vide (emptyStar) doit être affichée en fonction de la valeur de ratingValue par rapport à rangeElem.
            alt="rating"
          />
        ))}
      </div>
    );
  };

  export default Rating