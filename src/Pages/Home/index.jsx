import './style.css';
import CardGroup from '../../Components/CardGroup/index.js';
import Carousel from '../../Components/Carousel';


function Index() {
  return (
    <div className="conteiner-home">
      <div className="teste"><Carousel /></div>
      <CardGroup />
    </div>
  );
}

export default Index;
