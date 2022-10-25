// pages
import Home from "./pages/Home/Home"
import AboutMe from "./pages/About/AboutMe"
import Resume from "./pages/Resume/Resume"
import FavSong from "./pages/FavoriteSong/FavSong";
import Certificate from "./pages/Certificate/Certificate";


import { Route, Routes } from "react-router-dom"
import React from "react";

//component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grade from "./pages/Grade/Grade";


function App() {
  const MENU = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
      title: "Home",
     
      
    },
    {
      name: "AboutMe",
      path: "/aboutme",
      element: <AboutMe />,
      title: "AboutMe",
      
    },
    {
      name: "Resume",
      path: "/resume",
      element: <Resume />,
      title: "Resume",
      
    },
    {
      name: "Favorite Song",
      path: "/favsong",
      element: <FavSong />,
      title: "FavSong",
      
    },
    {
      name: "Certificate",
      path: "/certificate",
      element: <Certificate />,
      title: "Certificate",

    },
    {
      name: "Grade",
      path: "/grade",
      element: <Grade />,
      title: "Grade",

      
    },
   
  ];
  return (
    <div className="page-container" >
    <div className="content-wrap">

    </div>
    <div>
      <Navbar MENU={MENU} />
      <Routes>
        {/* <Route  path="/Banner" element={<BannerMain />} />
        <Route path="/videos" element={<VideoMain/>}/> */}
        {MENU?.map((page, index) => {
          return (
            <Route
              key={`key-of-route-${index}`}
              path={page.path}
              element={page.element}
            />
          );
        })}
      </Routes>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
