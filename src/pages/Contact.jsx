import { useState } from 'react'
import netlify from 'netlify'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    netlify
      .submitForm(form.getAttribute('name'), formData)
      .then(() => console.log('Form submission successful'))
      .catch((error) => console.error('Form submission error:', error))
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
          <form
            netlify
            name='contact-form'
            method='POST'
            // data-netlify='true'
            onSubmit={handleSubmit}
            className='contact__form'
          >
            {/* <input type='hidden' name='form-name' value='contact' /> */}
            <legend>send me a message</legend>
            <div className='contact__form-flex'>
              <label>
                <span className='visuallyHidden'>Name:</span>
                <input
                  type='text'
                  name='name'
                  value={name}
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                <span className='visuallyHidden'>Email:</span>
                <input
                  type='email'
                  name='email'
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
                name='message'
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
