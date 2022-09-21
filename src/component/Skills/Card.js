import React from "react"
import skill2 from "../pic/skill2.png"

const Card = (props) => {
 
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
          </div>
          <div className='rate'>
            <img src={props.image} className='shadow' alt=""/> 
          </div>
        </div>
        <hr />
        <p>{props.content}</p>
      </div>
    </>
  )
}

export default Card