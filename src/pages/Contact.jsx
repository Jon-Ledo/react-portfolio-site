import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert('Form submitted successfully!'))
      .catch((error) => alert(error))

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
          <form
            onSubmit={handleSubmit}
            className='contact__form'
            name='portfolio-contact-form'
            data-netlify='true'
            // action='submit'
            method='POST'
          >
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
