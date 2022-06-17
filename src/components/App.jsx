import React from "react";

import Header from "../components/Header";
import Body from "./Body";
import Footer from "../components/Footer";

import TopButton from "./TopButton";

function App() {
  return (
    <div>
      <TopButton />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
