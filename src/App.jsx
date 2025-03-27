import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
function App() {
  return (
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
          <Route path="petgrooming" element={<Petgrooming />} />
          <Route path="vetconsultation" element={<Vetconsultation />} />
          <Route path="resetpassword" element={<ResetPass />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
