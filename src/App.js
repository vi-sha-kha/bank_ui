import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Business from "./components/Business";
import Individual from "./components/Individual";
import Nbank from "./components/Nbank";
import Services from "./components/Services";
import Navbar2 from "./components/nav/Navbar2";
import Routing from "./routes/Routes";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <BrowserRouter>
        <Navbar2 />

        {/* <Navbar2 /> */}
        <Individual />
        <Business />
        <Services />
        <Nbank />
      </BrowserRouter>
    </div>
  );
}

export default App;
