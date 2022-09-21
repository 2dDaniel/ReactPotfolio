import React from "react"
import "./project.css"
import Card from "./Card"
import prome from "./prome"

const ProjectMe= () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h1>My Project</h1>
          </div>
          <div className='content grid'>
            {prome.map((value, index) => {
              return <Card key={index} 
              image={value.image} 
              category={value.category}
               title={value.title}
               contenttw0={value.contenttw0} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectMe