import './Card.css';

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      <img
        className="card--image"
        src={props.item.coverImg}
        alt={props.item.altText}
      />
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--rating-section">
        <img
          className="card--icon"
          src="/assets/star.png"
          alt="Icon of a red star"
        />
        <p className="card--text">{props.item.stats.rating}</p>
        <p className="card--text-grey">({props.item.stats.reviewCount})</p>
        <p className="card--text-grey">•</p>
        <p className="card--text-grey">{props.item.location}</p>
      </div>
      <div className="card--description">
        <h2 className="card--text">{props.item.title}</h2>
      </div>
      <div className="card--price">
        <p className="card--text card--text-bold">
          From ${props.item.price}{' '}
          <span className="card--text-regular">/ person</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
