import Navbar from "../Navbar/Navbar";
import "./Booking.css";

function Booking() {
  function myfun(){
    alert(' Your Booking has been confirmed');
  }
  return (
    <>
      <Navbar />

      <div className="content">
        <div className="header">
          <h1>BOOK YOUR APPOINTMENT</h1>
        </div>

        <div className="booking-container">
          <div className="container">
          <form action="">
                <div className="container-head">
                  <h3>Book Your Service Online</h3>
                </div>

                <div className="container-body">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Select Your Application"
                    aria-label="default input example"
                  />
                  <label></label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter your Name"
                    aria-label="default input example"
                  />
                  <label></label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Mobile Number"
                    aria-label="default input example"
                  />
                  <label></label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Your Email"
                    aria-label="default input example"
                  />
                  <label></label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Select Your Location"
                    aria-label="default input example"
                  />

                  <div className="btn">
                    <button type="submit" onClick={myfun}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
          
   
      
    </>
  );
}

export default Booking;
