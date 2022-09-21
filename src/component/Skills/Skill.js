import React from "react"
import "./Skill.css"
import SkillApi from "./SkillApi"
import Card from "./Card"

const Skill = () => {
  return (
    <>
      <section className='skill' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>Skills</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h1>Technical Skill</h1>
              </div>

              <div className='content'>
                {SkillApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card
                     key={id} 
                     title={val.title}
                      year={val.year}
                       image={val.image}
                        content={val.content} />
                  }
                })}

              </div>
            </div>

            <div className='left'>
              <div className='heading'>
                <h1>Soft Skill</h1>
              </div>

              <div className='content'>
                {SkillApi.map((val, index) => {
                  if (val.category == "experience") {
                    return <Card key={index} 
                    title={val.title} 
                      content={val.content} />
                  }
                })} 
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill