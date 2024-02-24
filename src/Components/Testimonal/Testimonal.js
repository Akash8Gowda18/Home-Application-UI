import Navbar from "../Navbar/Navbar";
import "./Testimonal.css";
import Small1 from '../../Assets/Images/Small1.png';
import Small2 from '../../Assets/Images/Small2.png';
import Small3 from '../../Assets/Images/Small3.png';
import Small4 from '../../Assets/Images/Small4.png';

function Testimonal() {
  return (
    <>
      <Navbar />

      <div className="header">
        <h1>Why Choose Us?</h1>
      </div>

      <div className="property-container">
        <div className="container">
          <img src={Small1} alt="Fridge" className="logo" />
          <p>Deals In All Brands, Types And Models With Reliablity</p>
        </div>

        <div className="container">
          <img src={Small2} alt="Fridge" className="logo" />
          <p>Trained Engineers From Reputed Major Appliance Brands</p>
        </div>

        <div className="container">
          <img src={Small3} alt="Fridge" className="logo" />
          <p>Genuine Replacement Spare Parts Of All Brands</p>
        </div>

        <div className="container">
          <img src={Small4} alt="Fridge" className="logo" />
          <p>Always Arrive On Time And Treat You With Respect</p>
        </div>
      </div>

      <div className="header">
        <h1>Customer Review</h1>
      </div>

      <div className="review-container">
        <div className="container">
          <p>
            Very happy to have my refrigerator fixed timely. Excellent job.
            Technician was Knowledgable and friendly. He made the repair
            quickly. -Priya verma
          </p>
        </div>

        <div className="container">
          <p>
            The best customer service I have had in a very long time! Thank you
            Dr.Pro Service Centre! There was need of such professional repair
            company -Ramesh Shah
           </p>
        </div>
      </div>
    </>
  );
}

export default Testimonal;
