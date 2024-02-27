import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <img
        className="card--image"
        src="/assets/katie-zaferes.png"
        alt="Photo of Kate Zaferes smiling into a camera with her swimsuit on"
      />
      <span class="card--image-banner">Sold out</span>
      <div className="card--rating-section">
        <img
          className="card--icon"
          src="/assets/star.png"
          alt="Icon of a red star"
        />
        <p className="card--text">5.0</p>
        <p className="card--text-grey">(6)</p>
        <p className="card--text-grey">•</p>
        <p className="card--text-grey">USA</p>
      </div>
      <div className="card--description">
        <h2 className="card--text">Life lessons with Katie Zafares</h2>
      </div>
      <div className="card--price">
        <p className="card--text card--text-bold">
          From $136 <span className="card--text-regular">/ person</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
