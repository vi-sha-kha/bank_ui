import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles.css";
import "./components/footer.css";
import Business from "./components/Business";
import Individual from "./components/Individual";
import Nbank from "./components/Nbank";
import Services from "./components/Services";
import Navbar2 from "./components/nav/Navbar2";
import Header from "./components/nav/Header";
import About from "./components/About";
import Routing from "./routes/Routes";
import CarouselItem from "./components/carousel/Carousel";
import Promo from "./components/section/Promo";
import Promo2 from "./components/section/Promo2";
import OurStories from "./components/section/OurStories";
import Footer from "./components/Footer";
import Grid4 from "./components/Grid4";
import CardsScrollable from "./components/CardsScrollable";
import TabScrollable from "./components/TabScrollable";
import CarouselMini from "./components/carousel/CarouselMini";
import Alert from "./components/alert/Alert";
import Alert2 from "./components/alert/Alert2";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}

      <div className="try-res2">
        <Navbar2 />

        <div className="disp-main">
          <div className="try-res ">
            <Alert />
            <CarouselItem />
            <CardsScrollable />
            <Promo />
            <OurStories />
            <Grid4 />
            <Promo2 />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
