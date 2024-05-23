import Rating from "./Stars";



const Board = ({ title, location, host, rating,   }) => {
    return (
      <div className="boards">
        <section className="boards-content">
          <div className="boards-content-title">
            <h2 className="boards-title">{title}</h2>
            <h3 className="boards-subtitle">{location}</h3>
            <div className="tags"></div>
          </div>
          <div className="boards-content-host">
            <Rating rating={rating}
            />
            <div className="host-info">
              <p>{host.name}</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Board