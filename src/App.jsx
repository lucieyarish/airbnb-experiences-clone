import './App.css';
import Header from './layout/Header';
import Card from './layout/Card';
import data from './data/data';

function App() {
  console.log(data);
  const cards = data.map((item, index) => {
    return (
      <Card
        key={index}
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
    <>
      <Header />
      {cards}
    </>
  );
}

export default App;
