import React from "react";
import Header from "./component/Head/Header";
import "./App.css";
import Features from "./component/Minds/Mind";
import Home from "./component/Hero/Home";
import Resume from "./component/Skills/Skill";
import Blog from "./component/Blog/Blog";
import Project from "./component/Projects/projectMe";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footers/Footer";
import About from "./component/About/About";



const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Project/>
      <Resume />
      <Features />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
