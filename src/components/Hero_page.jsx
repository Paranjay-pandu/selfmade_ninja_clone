import React, { useEffect } from 'react'
import gsap from 'gsap';

const Hero_page = () => {
    useEffect(() => {
        gsap.to("img#sub1, img#sub2, img#sub3, img#sub4", {
            y: -18,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: "linear",
        })
    }, [])
    
  return (
    <>
        <div id="hero">
            <div id="cover"></div>
            <div id="filler1"></div>
            <div id="filler2"></div>
            <img id='hero_img' src="https://selfmade.ninja/assets/hero-backgrounds/ninja-potrait.webp" alt="Hero Image" />
            
            <div id="hero_title">
                <h1>Master <span>THE ART OF TECH</span> <br />
                Become Selfmade Ninja</h1>
                <button>Explore Courses</button>
            </div>
            <img src="https://selfmade.ninja/assets/hero-backgrounds/code-icon.webp" alt="vertices icon" id="sub1" />
            <img src="https://selfmade.ninja/assets/hero-backgrounds/curly-braces-icon.webp" alt="Brackets" id="sub2" />
            <img src="https://selfmade.ninja/assets/hero-backgrounds/incognito-icon.webp" alt="incognito" id="sub3" />
            <img src="https://selfmade.ninja/assets/hero-backgrounds/iot-icon.webp" alt="icons" id="sub4" />
        </div>
    </>
  )
}

export default Hero_page
