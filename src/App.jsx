import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import "./App.css";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    const scroll = e.target.documentElement.scrollTop;
    if (scroll > 50) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  };
  return (
    <div className="App">
      <Header scroll={isScroll} isAdmin={false} />
    </div>
  );
};

export default App;
