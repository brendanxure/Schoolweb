import {useState} from 'react'

const Contact = () => {
    const [contact, setContact] =useState([
        {
            id: 1,
            icon: '',
            contact: '+2348172665811',
        },
        {
            id: 2,
            icon: '',
            contact: 'instaday9ja@gmail.com',
        },
        {
            id: 3,
            icon: '',
            contact: 'Abuja, Nigeria',
        },
    ])
  return (
    <div>
        <div>
            <article>
                <div>

                </div>
                <h1>Contact Us</h1>
                <p></p>
                <div>
                    {contact.map(eachone=> 
                    <div>
                        <span>{eachone.icon}</span>
                        <p>{eachone.contact}</p>
                    </div>    
                    )}
                </div>
            </article>
            <form>
                <div>
                    <input type='text' required placeholder='First Name'></input>
                    <input type='text' required placeholder='Last Name'></input>
                </div>
                <div>
                    <input type='email' required placeholder='Your Email Address'></input>
                    <textarea rows='7' required placeholder='Write your message' ></textarea>
                </div>
                <input type='submit' value='Send Message'></input>
            </form>
        </div>
    </div>
  )
}

export default Contact