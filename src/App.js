import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
