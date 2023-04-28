import React, { useRef, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const h1Element = h1Ref.current;
    const h2Element = h2Ref.current;

    observer.observe(h1Element);
    observer.observe(h2Element);

    return () => {
      observer.unobserve(h1Element);
      observer.unobserve(h2Element);
    };
  }, [h1Ref, h2Ref]);

  return (
    <div className="text-holder">
      <div>
        <h1 ref={h1Ref}>
          The most popular cricket <br />
          players platform
        </h1>
        <h2 ref={h2Ref}>
          Start searching players <span>now!</span>
        </h2>
      </div>
      <div className="hero-flex">
        <Link to="playerpage" className="hero-button">
          Explore Players!
        </Link>
      </div>
    </div>
  );
};

export default Hero;

