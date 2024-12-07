import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import PlainLayout from "./layouts/PlainLayout";
import Home from "./pages/Home/Home";
import Learningintro from "./pages/learning-intro/learningintro.js";
import Messform from "./pages/messageform/MessForm.js";
import Partnership from "./pages/partnership/partnership";
import Projectdiscuss from "./pages/projectdiscuss/projectdiscuss.js";
import Startupmess from "./pages/startupmess/startupmess.js";
import Messages from "./Data/messages.js";
import Mentorship from "./Data/mentorship.js";
import Startup from "./Data/startup.js";
import Projectmessage from "./Data/projectmessage.js";
import Success from "./pages/successpage/success.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/Partnership" element={<MainLayout><Partnership /></MainLayout>} />
      <Route path="/messform" element={<PlainLayout><Messform /></PlainLayout>} />
      <Route path="/startupmess" element={<PlainLayout><Startupmess /></PlainLayout>} />
      <Route path="/Projectdiscuss" element={<PlainLayout><Projectdiscuss /></PlainLayout>} />
      <Route path="/learningintro" element={<PlainLayout><Learningintro /></PlainLayout>} />
      <Route path="/Success" element={<PlainLayout><Success /></PlainLayout>} />
      <Route path="/messages" element={<MainLayout><Messages /></MainLayout>} />
      <Route path="/Mentorship" element={<MainLayout><Mentorship /></MainLayout>} />
      <Route path="/Startup" element={<MainLayout><Startup /></MainLayout>} />
      <Route path="/Projectmessage" element={<MainLayout><Projectmessage /></MainLayout>} />
  
    </Routes>
  );
}
export default App;
