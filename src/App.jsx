import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="contentContainer">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
