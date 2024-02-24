import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="left-container">
        <div className="col">
          <div className="row">
          <div className="brand-head">
            <h2>Welcome to Dr. Pro Service Centre</h2>
          </div>
          <div className="brand-para">
            <p>
              We provide Repair and Service of Fridge, Washing Machine &
              Microwave Home Appliances
            </p>
          </div>

          <div className="btn">
            <button>Contact Us</button>
          </div>
          
          </div>
        </div>

        <div className="col">
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
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>24 x 7 SERVICE</p>
      </div>
    </>
  );
}

export default Home;
