import './Main.css';
import Card from './Card';
import data from '../data/data';

const Main = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        altText={item.altText}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <main className="main--container">
      <section className="card--list">{cards}</section>
    </main>
  );
};

export default Main;
