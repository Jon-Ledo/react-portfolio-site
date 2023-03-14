import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import profileImage from '../../assets/T03NZLJAWVA-U03TVA7PHJN-61647d892c38-512.jpg'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  const setNavToFalse = () => {
    setIsNavOpen(false)
  }

  return (
    <nav className='navbar'>
      <div className='navbar__profile-container'>
        <img className='navbar__profile-pic' src={profileImage} alt='profile' />
        <h1 className='navbar__profile-name'>Jon Ledo</h1>
        <span className='underline'></span>
      </div>

      <div className='navbar__links-container'>
        <ul className={`navbar__links ${isNavOpen ? '' : 'toggle'}`}>
          <li className='navbar__links-item'>
            <a href='#home' className='active' onClick={setNavToFalse}>
              Home
            </a>
          </li>
          <li className='navbar__links-item' onClick={setNavToFalse}>
            <a href='#about'>About Me</a>
          </li>
          <li className='navbar__links-item' onClick={setNavToFalse}>
            <a href='#resume'>Resume</a>
          </li>
          <li className='navbar__links-item' onClick={setNavToFalse}>
            <a href='#projects'>Projects</a>
          </li>
          <li className='navbar__links-item' onClick={setNavToFalse}>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>

      <div className='navbar__socials'>
        <ul className='navbar__links-social'>
          <li className='navbar__links-item'>
            <a
              href='https://github.com/Jon-Ledo'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li className='navbar__links-item'>
            <a
              href='https://www.linkedin.com/in/jonathan-ledo/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>

          <button onClick={toggleMenu}>
            <span className='navbar-toggle-icon'>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
