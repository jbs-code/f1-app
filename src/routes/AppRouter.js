import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/screens/Home';
import ChampConstructors from '../components/screens/ChampConstructors';
import ChampDrivers from '../components/screens/ChampDrivers';
import Nav from "../components/Nav";
import { useEffect } from "react";
import { gsapFooter } from "../helpers/gsapHelper";
import Footer from "../components/Footer";

// const img = require.context('../assets/');
export const AppRouter = () => {

  useEffect(() => {
    gsapFooter();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constructors" element={<ChampConstructors />} />
          <Route path="/drivers" element={<ChampDrivers />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );

}