import "./contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <span className="contactTitle">CONTACT US</span>
      <form className="contactForm">
      
            <label>Name</label>
            <input type="text" required placeholder='Full Name' className="contactInput" />
        

          
            <label>Email</label>
            <input type="email" required placeholder='abc@xyz.com' className="contactInput"/>

            <label>Message</label>
            <input type="text" required placeholder='Tell us about your query...' className="contactMessage" />

          <button className="contactButton" type="submit">Send</button>
      </form>

    </div>
  )
}
