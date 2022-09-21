import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </>
  )
}

export default Card