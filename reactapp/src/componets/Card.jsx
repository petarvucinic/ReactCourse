import "./Card.css";

function Card({title, job, url}) {
    
  return (
    <div className="card">
      <img src={url} />
      <p >{title}</p>
      <p >{job}</p>
    </div>
  );
}

export default Card;
