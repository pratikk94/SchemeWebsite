import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import FormPage from "./Pages/Form";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
