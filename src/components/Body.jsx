import React from "react";

import Home from "./subComponents/Home";
import Services from "../components/subComponents/Services";
import About from "./subComponents/About";
import MyWorks from "./subComponents/MyWorks";

function Body() {
  return (
    <div>
      <Home />
      <Services />
      <About />
      <MyWorks />
      {/* testimonial */}
      {/* my clients */}
      {/* contact */}
    </div>
  );
}

export default Body;
