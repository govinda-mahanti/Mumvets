import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// mumvets
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Booking from "./Pages/Booking";
import BookingStatus from "./Pages/BookingStatus";
import Contactus from "./Pages/Contactus";
import Service from "./Pages/Service";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";
import Petgrooming from "./Pages/Petgrooming";
import Vetconsultation from "./Pages/Vetconsultation";
import ResetPass from "./Pages/ResetPass";
import VetHomeVisitInMumbai from "./Pages/VetHomeVisitInMumbai";
import PetVaccination from "./Pages/PetVaccination";

// admin
// import AdminLayout from "./Admin/AdminLayout";
// import AdminLogin from "./Admin/AdminLogin";
// import Deshboaed from "./Admin/Deshboaed";
function App() {
  return (
    <>
     https://mumvets.com/pet-grooming-at-home-in-mumbai
     https://mumvets.com/online-vet-consultation
     https://mumvets.com/vet-home-visit
     https://mumvets.com/pet-vaccinations-at-home/

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="booking" element={<Booking />} />
          <Route path="bookingStatus" element={<BookingStatus />} />
          <Route path="services" element={<Service />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pet-grooming-at-home-in-mumbai" element={<Petgrooming />} />
          <Route path="online-vet-consultation" element={<Vetconsultation />} />
          <Route path="resetpassword" element={<ResetPass />} />
          <Route path="vet-home-visit" element={<VetHomeVisitInMumbai />} />
          <Route path="pet-vaccinations-at-home" element={<PetVaccination />} />
        </Route>
      </Routes>
    </Router>


      
    {/* <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Deshboaed />} />
        </Route>
      </Routes>
    </Router> */}


    </>
  );
}

export default App;
