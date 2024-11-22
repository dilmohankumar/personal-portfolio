import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/footer.js";
import Messform from "./pages/messageform/messform.js";
import { Route, Routes } from "react-router-dom";
import Partnership from "./pages/partnership/partnership.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messform" element={<Messform />} />
        <Route path="/Partnership" element={<Partnership />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
