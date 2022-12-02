import './style.css';
import Anim from '../Lottie/Lottie';
import Anim2 from '../Lottie/Ticket';
import Anim3 from '../Lottie/shop';
import Anim4 from '../Lottie/vr';

function Card() {
    return (
     <>
      <div className="container">
          <div className='animation'><Anim/></div>
          <div className='description'>Пропуск на 5 раз</div>
          <div className='btn'>Buy</div>
      </div>

      <div className="container">
          <div className='animation'><Anim2/></div>
          <div className='description'>Пропуск на 10 раз</div>
          <div className='btn'>Buy</div>
      </div>

      <div className="container">
          <div className='animation'><Anim3/></div>
          <div className='description'>Пропуск на 15 раз</div>
          <div className='btn'>Buy</div>
      </div>

      <div className="container">
          <div className='animation'><Anim4/></div>
          <div className='description'>Пропуск на 20 раз</div>
          <div className='btn'>Buy</div>
      </div>
     </>
    );
  }
  
  export default Card;
  