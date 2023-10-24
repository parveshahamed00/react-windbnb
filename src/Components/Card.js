function Card(props) {
  return (
    <div className="card">
      <div className="location">📍 {props.location}</div>
      <div className="img">
        <img src={props.image}></img>
      </div>
      <div className="type-ratings">
        <div className="type">
          <p>{props.type}</p>
        </div>
        <div className="rating">
          <p>{props.ratings}</p>
        </div>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
}
export default Card
