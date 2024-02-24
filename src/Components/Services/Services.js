import Navbar from "../Navbar/Navbar";
import Fridge from '../../Assets/Images/fridge.png';
import WashingMachine from '../../Assets/Images/washingmachine.png';
import Oven from '../../Assets/Images/oven.png';

import './Services.css';

function Services() {
    return (
  <>
      <Navbar />

      <div className="header">
        <h1>OUR SERVICES</h1>
      </div>

      <div className="para">
      <p>THE ONE-STOP RESOURCE FOR GETTING THE RIGHT REPAIRS PROFESSIONAL FOR YOUR HOME APPLIANCE SERVICES NEEDS</p>
      </div>

      <div className="service-container">
      <div className="container">
        <img src={Fridge} alt="Fridge" className="logo" />
        <p>Refrigerator / Fridge Repair & Service</p> 

      </div>
      <div className="container">
        <img src={WashingMachine}  alt="Washing Machine" className="logo"/>
        <p>Washing Machine  Repair & Service</p>

      </div>
      <div className="container">
       <div className="oven">
       <img src={Oven}  alt="Microwave" className="logo" />
        <p>Microwave Oven  Repair & Service</p>
       </div>

      </div>
    </div>
     
  
    </>   
  
  
    ) 
  
  
  
  
  
  
  
  };
  
  export default Services;