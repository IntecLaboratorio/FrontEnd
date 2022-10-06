import './style.css';
import CardGroup from '../../Components/CardGroup/index.js';
import Carousel from '../../Components/Carousel';


function Index() {
  return (
    <div className="conteiner-home">
        <Carousel/>
        <CardGroup/>    
      </div>
  );
}

export default Index;
