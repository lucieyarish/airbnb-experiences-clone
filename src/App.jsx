import './App.css';
import Header from './layout/Header';
import Card from './layout/Card';

function App() {
  return (
    <>
      <Header />
      <Card
        img={'/assets/katie-zaferes.png'}
        alt={
          'Photo of Katie Zaferes smiling into a camera with her swimsuit on'
        }
        rating={'5.0'}
        reviewCount={6}
        country={'USA'}
        title={'Life lessons with Katie Zafares'}
        price={136}
      />
    </>
  );
}

export default App;
