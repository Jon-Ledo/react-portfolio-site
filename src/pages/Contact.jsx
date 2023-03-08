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
          <article className='contact__details-info'>
            <p>Name </p>
            <p>Email</p>
            <p>??</p>

            <div className='contact__details-socials'>
              <p>Socials</p>
              <p>linkedin ICON</p>
              <p>github ICON</p>
            </div>
          </article>

          {/* contact form */}
          <form onSubmit={handleSubmit} className='contact__form'>
            <div className='contact__form-flex'>
              <label>
                Name:
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Email:
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
