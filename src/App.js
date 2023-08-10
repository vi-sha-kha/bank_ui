import "./App.css";
import AllCollapse from "./components/accordion/Accordion";
import Navigation_bar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navigation_bar />
      <AllCollapse />
    </div>
  );
}

export default App;
