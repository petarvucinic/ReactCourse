import "./Card.css";

function Card({url, title, job}) {
    
  return (
    <div className="card">
      <img src={url} />
      <p >{title}</p>
      <p >{job}</p>
    </div>
  );
}

export default Card;
