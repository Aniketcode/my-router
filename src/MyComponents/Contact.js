import React from 'react'

export default function Contact() {
  return (
    <div className='contact mt-5'>
      <h1>Contact Me</h1>
      <form action="">
        <label className="name">Name:</label><br/>
        <input className='input' type="text" name="name"required /><br />
        <label className="name">Email:</label><br/>
        <input className='input'type="email" name="email"required />
        <br />
        <label className="name">Comment:</label><br/>
        <textarea className='input'name="textarea"required id="" cols="20" rows="5"></textarea>
        <br />
        <button class="btn btn-primary" >Submit</button></form>
        
    
    </div>
  )
}
