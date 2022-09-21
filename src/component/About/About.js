import React from "react"
import hero from "../pic/chidi.jpg"
import "./About.css";

const About = () => {
  return (
    <>
 <div className="about" id="about">
        <h1>About Me</h1>
        </div>
      <section className='home'>
        <div className='container_flexSB'>
          <div className='left row'>
            <h2>
            Daniel Chidiebere
            </h2>
            <h3>
            <div className='details'>
                  <p>A creative being who never stops learning,
                  my ethusaism to learning, experiementing and implementing new 
                  ideas got going.</p><br />
                  <p>I am available let's Connect to know me more.</p> <br />
                  <p>Phone: <a href="" className="link"> +2349137454054 </a> </p>
                  <p>Email: <a href="" className="link">danielchidi042dD@gmail.com </a> </p> <br />
                  <span>FIND ME BELOW ❕</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-git-hub'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
            </h3>
          </div>
          <div className='right row'>
            <div className='img'>
              <img src={hero} alt='' />
            </div>
            </div> 
          
        </div>
      </section>
   
    <section className="domo"></section>
    </>
  )
}

export default About;