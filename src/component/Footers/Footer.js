import React from "react"
import "./Footer.css"


const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <>
      <footer >
        <div className='conatiner text-center top'>
          <div className='img'>
               
          </div>
          <p>copyright &copy; reserved {date} daniel Chidiebere</p>
        </div>
      </footer>
    </>
  )
}

export default Footer