type Card = {
  [key: string]: string;
};
export default function Card(props: Card) {
  return (
    <div className="card-container" id={props.id}>
      <div className="content">
        <div className="front">
          <img className="card-img"></img>
        </div>
        <div className="back from-left">
          <img className="search-img"></img>
        </div>
      </div>
      <p>{props.name}</p>
    </div>
  );
}
