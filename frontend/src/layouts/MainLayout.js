import Header from "../components/Header/Header";
import {useState} from "react";
import Footer from "../components/Footer/footer";
const MainLayout = ({ children }) => {
  const [user] = useState(null); 
  return (
    <>
      <Header user={user}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
