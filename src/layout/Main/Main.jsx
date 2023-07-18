/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Divider from "../../components/Divider/Divider";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import Navbar from "../../components/Navbar/Navbar";
import { createContext } from "react";
export const AuthContext = createContext(null);
const Main = ({ children }) => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [currentUser, setCurrentUser] = useState({ name: "" });
  return (
    <>
      <AuthContext.Provider value={[currentUser, setCurrentUser]}>
        <Navbar />
        {children}
        <Divider /> {/** Divider */}
        <Footer />
      </AuthContext.Provider>
    </>
  );
};

export default Main;
