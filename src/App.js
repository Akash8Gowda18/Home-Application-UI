import{Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Services/Services';
import Testimonal from './Components/Testimonal/Testimonal';
import Booking from './Components/Bookings/Booking';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';








function App() {
      
      

  return (
    <div className="App">
     
     
    
     <switch>
       <Routes>
       <Route path="/" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Test" element={<Testimonal/>}/>
        <Route path="/btn" element={<Booking/>}/>
        <Route path="/cbtn" element={<Contact/>}/>  
       </Routes>
      </switch>
      
      
    </div> 
  );
}

export default App;
