import Lottie from "lottie-react";
import ticket from './Lotties/ticket.json'

function Anim2() {
  return (
   <>
   <Lottie animationData={ticket} loop={true} width={200} height={200}/>
   </>
  );
}

export default Anim2;
