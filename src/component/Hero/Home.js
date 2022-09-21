import React from "react"
import "./Home.css"
import { Typewriter } from "react-simple-typewriter"


const Home = () => {
  return (
    <>
      <section className='hero' id='home'>

        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD!..</h3>
            <h1>
              Hi, I’m <span> Daniel Chidiebere</span>
            </h1>
            <h2>
              A
              <span>
                <Typewriter words={[" Front-end.", " Developer."]} 
                loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            
            <p>I use animation as a third dimension by which to 
            simplify experiences and buiding through each and every
             interaction. 
            I’m not adding motion just to spruce things up,
             but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
                <div className='button'>
                  <a href="Blog.js" className='btn_shadow' download={true}>
                   Download CV 
                  </a>
                </div>
              </div>  
          </div>

          <div className='right'>
            <div className='right_img'>
              <img src="" alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home