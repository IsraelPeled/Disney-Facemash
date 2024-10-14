import "../css/card.css";
function Card(props) {
  return (
    <>
      <div className="card" id={props.id}>
        <img src={props.image}></img>
        <h1>{props.name}</h1>
      </div>
    </>
  );
}

export default Card;
