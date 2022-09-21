import React, { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
          <div className="dan"></div>
            <h1>Get In Touch With Me</h1>
          </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'><a>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i></a>
                </button>
              </form>
{/*               
                        <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                <p>About me</p>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Daniel Chidiebere</h1>
                  <p>A creative being who never stops learning,
                  my ethusaism to learning, experiementing and implementing new 
                  ideas got going.</p><br />
                  <p>I am available let's Connect to know me more.</p> <br />
                  <p>Phone: <a href=""> +2349137454054 </a> </p>
                  <p>Email: <a href="">danielchidi042dD@gmail.com </a> </p> <br />
                  <span>FIND ME BELOW ❕</span> */}
                  {/* <div className='button f_flex'>
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
              </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact