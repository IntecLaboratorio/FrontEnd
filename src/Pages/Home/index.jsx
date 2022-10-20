import './style.css';
import CardGroup from '../../Components/CardGroup/index.js';
import Carousel from '../../Components/Carousel';
import Sidebar from '../../Components/Sidebar/sidebar.js'

function Index() {
  return (
    <div className='container-home'>
      <div><Sidebar></Sidebar></div>
        <div className="wrap-home">
            <Carousel/>
            <CardGroup/>    
        </div>
      </div>
  );
}

export default Index;
