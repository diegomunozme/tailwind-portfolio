import Header from "./Components/Header";
import Switcher from "./Components/Switcher";
import Card from "./Components/UI/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Experience from "./Pages/Experience";

const App = () => {
  return (
    <div className=" transition bg-[#f4e5cc] dark:bg-gray-800">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/Experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
