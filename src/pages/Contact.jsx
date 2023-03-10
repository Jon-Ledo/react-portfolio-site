import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id='contact' className='contact'>
      <div className='page-wrapper'>
        <div className='title-container'>
          <div className='bars'></div>
          <h2>Contact</h2>
          <div className='bars'></div>
        </div>
        <span className='underline'></span>

        <div className='contact__details-container'>
          {/* Keeping this here for possible future change */}
          {/* <article className='contact__details-info'>
            <p>Follow Me</p>
            <p>Email</p>
            <p>??</p>

            <div className='contact__details-socials'>
              <p>Socials</p>
              <p>linkedin ICON</p>
              <p>github ICON</p>
            </div>
          </article> */}

          {/* contact form */}
          <form
            onSubmit={handleSubmit}
            className='contact__form'
            data-netlify='true'
            action='submit'
            method='POST'
          >
            <legend>send me a message</legend>
            <div className='contact__form-flex'>
              <label>
                <span className='visuallyHidden'>Name:</span>
                <input
                  type='text'
                  value={name}
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                <span className='visuallyHidden'>Email:</span>
                <input
                  type='email'
                  value={email}
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label>
              <span className='visuallyHidden'>Your Message:</span>
              <textarea
                value={message}
                placeholder='Your message...'
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <button type='submit'>Send Email</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
