import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import FormPage from "./Pages/Form";
import NavBar from "./component/NavBar";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/Contact";
import SchemeByCategory from "./Pages/SchemeByCategory";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/form" element={<FormPage type="0" />} />
        <Route path="/form/1" element={<FormPage type="1" />} />
        <Route path="/form/2" element={<FormPage type="2" />} />
        <Route path="/form/3" element={<FormPage type="3" />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/schemeByCategory" element={<SchemeByCategory />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
