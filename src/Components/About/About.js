import Navbar from "../Navbar/Navbar";
import './About.css'
import Man1 from '../../Assets/Images/Man1.jpg';


function About() {
    return (
      <>
      <Navbar />

      <div className="header">
     <h1>ABOUT US</h1>
      </div>


      <div className="about-para">
     <p> Dr. Pro is a panel of professionals who are professionally expert in the<br/> home appliance service & repair industry.
     They are completely capable of endowing you with the top superiority in-home services. 
     Call us or Book service online for Home & Kitchen Appliances like Refrigerators, Washing Machines, Microwave & more from top brands 
     – Samsung, LG, Whirlpool, Videocon, Panasonic + more. Get Fast doorstep services, deal direct with verified local technicians.</p>

<p>Dr. Pro Provide a complete range of services to you i.e. repair, installation and complete care of the household appliances.</p>

<div className="btn">
  <button>Contact Us</button>
</div>
 </div>

     < div className="image">
     <img src={Man1} alt="Man pic"  />
     </div>

     
      </>
    ) 
  
  
  
  
  
  
  
  };
  
  export default About;