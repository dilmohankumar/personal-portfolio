import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PlainLayout from "./layouts/PlainLayout";
import Home from "./pages/Home/Home";
import Messform from "./pages/messageform/MessForm.js";
import Partnership from "./pages/partnership/partnership";
import Startupmess from "./pages/startupmess/startupmess.js";
import Projectdiscuss from "./pages/projectdiscuss/projectdiscuss.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/Partnership" element={<MainLayout><Partnership /></MainLayout>} />
      <Route path="/messform" element={<PlainLayout><Messform /></PlainLayout>} />
      <Route path="/startupmess" element={<PlainLayout><Startupmess /></PlainLayout>} />
      <Route path="/Projectdiscuss" element={<PlainLayout><Projectdiscuss /></PlainLayout>} />
    </Routes>
  );
}
export default App;
