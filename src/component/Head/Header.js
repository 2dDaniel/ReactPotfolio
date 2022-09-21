import React, { useState } from "react"
import "./Header.css"
import { Typewriter } from "react-simple-typewriter"


const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
          <h4> <span>D</span>ANNY</h4>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
             onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#portfolio'>Project</a>
              </li>
              <li>
                <a href='#resume'>Skill</a>
              </li>
              <li>
                <a href='#features'>Tool</a>
              </li>
              <li>
                <a href='#blog'>Blog</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
                </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'>
                 </i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      <section className="demo"></section>
    </>
  )
}

export default Header;