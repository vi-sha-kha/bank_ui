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
        {/* <Navbar /> */}
        <Navbar2 />

        <div className="disp-main">
          {/* <Alert />

          <CarouselItem />
          <CardsScrollable />
          <Promo />
          <OurStories />
          <Grid4 />
          <Promo2 />
          <Individual />
          <Business />
          <About />
          <Services />
          <Nbank /> */}

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

// import "./styles.css";
// import { NavHashLink } from "react-router-hash-link";
// import { useLocation } from "react-router-dom";
// import { useCallback } from "react";

// export default function App() {
//   const { hash } = useLocation();
//   const isActive = (iHash) => hash === iHash;

//   return (
//     <div className="App">
//       <NavHashLink
//         className="sticky"
//         to="#tag1"
//         style={
//           isActive("#tag1")
//             ? {
//                 color: "red",
//               }
//             : {}
//         }
//         activeStyle={{
//           fontWeight: "bold",
//           color: "red",
//         }}
//       >
//         Scroll to Tag1
//       </NavHashLink>
//       <NavHashLink
//         className="sticky"
//         to="#tag2"
//         style={
//           isActive("#tag2")
//             ? {
//                 color: "red",
//               }
//             : {}
//         }
//       >
//         Scroll to Tag2
//       </NavHashLink>

//       <p id="tag1" className="bottom100">
//         Tag1
//       </p>
//       <p id="tag2" className="bottom200">
//         Tag2
//       </p>
//     </div>
//   );
// }
