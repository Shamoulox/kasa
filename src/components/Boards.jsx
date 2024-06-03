import Rating from "./Stars";
import SelectorAbout from "../components/SelectorAbout";
// import datajson from "../logements.json";

const Board = ({ title, location, host, rating, description, equipments,tags }) => {
  return (
    <div className="boards">
      <section className="boards-content">
        <div className="boards-content-title">
          <h2 className="boards-title">{title}</h2>
          <h3 className="boards-subtitle">{location}</h3>
          <div className="boards-buttons-container">
            {tags.map((tag,index)=> (
            <span className="buttons" key={index}><p>{tag}</p></span>
            ))}
          </div>
          <div className="tags"></div>
        </div>
        <div className="boards-content-host">
          <div className="host-info">
            <p>{host.name}</p>
            <Rating rating={rating} />
          </div>
        </div>
      </section>
      <div className="SelectorAbout">
        <SelectorAbout
          title="Description"
          text={description}
        ></SelectorAbout>
        <SelectorAbout
          title="Équipements"
          text={equipments}
          
        ></SelectorAbout>
      </div>
    </div>
  );
};

export default Board;
