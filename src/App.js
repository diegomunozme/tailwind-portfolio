import logo from "./logo.svg";
import Header from "./Components/Header";
import Switcher from "./Components/Switcher";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items center transition duration-200  bg-[#f4e5cc] dark:bg-gray-800">
      <Header />
      <Switcher />
    </div>
  );
};

export default App;
