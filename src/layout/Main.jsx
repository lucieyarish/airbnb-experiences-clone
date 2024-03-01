import './Main.css';
import Card from './Card';
import data from '../data/data';

const Main = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <main className="main--container">
      <section className="card--list">{cards}</section>
    </main>
  );
};

export default Main;
