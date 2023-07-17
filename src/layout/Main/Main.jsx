/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Divider from "../../components/Divider/Divider";
import Footer from "../../components/Footer/Footer";

import AOS from "aos";
const Main = ({ children }) => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {children}
      <Divider /> {/** Divider */}
      <Footer />
    </>
  );
};

export default Main;
