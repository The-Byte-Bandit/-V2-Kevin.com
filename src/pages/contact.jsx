import React from 'react'
import '../assets/styles/contact.css'

function Contact() {
  return (
    <div id='contact' className='flex flex-1 flex-col text-center align-center gap-1'>
      <div className="contact_me flex flex-1 flex-col gap-1">
        <div className="">
          <h1 className="nowrap">Reach Out !!</h1>
          <p className=''>
If you have any questions, a fascinating project that you believe would catch my interest, or simply want to drop a greeting, don&apos;t hesitate to get in touch! I&apos;ll make every effort to respond promptly. Cheers!</p>
        </div>
        <div className="">
        
          {/* <i className="fa-regular fa-envelope " style="color: #ccd6f6;"></i>

          <i className="fa-brands fa-github" style="color: #ccd6f6;"></i>

          <i className="fa-brands fa-linkedin" style="color: #ccd6f6;"></i>

          <i className="fa-brands fa-twitter" style="color: #ccd6f6;"></i>

          <i className="fa-brands fa-instagram" style="color: #ccd6f6;"></i> */}
        </div>
        <div className="gap-1 flex flex-col">
          <p>Designed & built by Your&apos;s Truly</p>
          <h6>&copy; Sunday Kevin 2024</h6>
        </div>
      </div>
    </div>
  )
}

export default Contact