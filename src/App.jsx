import React from "react";
import Navbar from "./components/Navbar";
import Hero_page from "./components/Hero_page";
import { gsap } from 'gsap';



const page = ()=>{
  return (
    <>
      <Navbar/>
      <Hero_page />
    </>
  )
}

export default page