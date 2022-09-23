import Header from "./Components/Header";
import Switcher from "./Components/Switcher";
import Card from "./Components/UI/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Experience from "./Pages/Experience/Experience";
import CoolThings from "./Pages/CoolThings.js";
import Footer from "./Pages/Footer/Footer";

const App = () => {
  return (
    <div className=" transition bg-[#f4e5cc] dark:bg-gray-800">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/Experience" element={<Experience />} />
          <Route exact path="/CoolThings" element={<CoolThings />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
