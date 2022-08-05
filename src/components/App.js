import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Menu from "./Menu";
import Location from "./Location";
import Waiting from "./Waiting";
import { getMenu } from "./../utils/menu";
import { operasional } from "../utils/jam-operasional";

export default function App() {
  const [menu] = useState(getMenu());

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Menu menu={menu} />
        <Waiting />
        <Location />
      </main>
      <Footer operasional={operasional} />
    </>
  );
}
