import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import joeroot from "../assets/images/joe-root.png";
import starc from "../assets/images/starc.png";
import "./Home.css";

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const image1Height = windowSize.width * 0.3; // 50% of window width
  const image1Left = windowSize.width * 0.2; // 50% of window height
  const image2Height = windowSize.width * 0.3; // 80% of window width
  const image2Left = windowSize.width * 0.33; // 30% of window height
  return (
    <div>
      <Navbar />
      <div className='home-hero'>
        <div>
          <Hero />
        </div>
        <div>
          <div className="image-container" style={{ marginTop: "20px" }}>
            <div>
              <img className="joe-root" src={joeroot} alt="joe-root" style={{ height: image1Height, position: "absolute", left: image1Left }} />
            </div>
            <div>
              <img className="starc" src={starc} alt="mitchell-starc" style={{ height: image2Height, position: "absolute", left: image2Left }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
