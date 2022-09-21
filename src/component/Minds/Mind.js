import React from "react"
import "./Mind.css"
import data from "./Mind-Api"
import Card from "./Card"

const Mind = () => {
  return (
    <>
      <section className='mind top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>Tools</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index}  
              title={val.title}
              body={val.body} />
            })}
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Mind