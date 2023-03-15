import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaNpm,
  FaGitAlt,
} from 'react-icons/fa'
import { SiExpress, SiMysql, SiMongodb } from 'react-icons/si'
import MyPDFFile from '../assets/Jon_Ledo_Resume_2023_Fullstack-V1.0.pdf'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='about__container page-wrapper'>
        <div className='title-container'>
          <div className='bars'></div>
          <h2>About Me</h2>
          <div className='bars'></div>
        </div>
        <span className='underline'></span>
        <div className='about__flex-container'>
          <div className='about__description'>
            <h3>
              I'm <span className='red-text'>Jon Ledo</span>, a Full Stack Web
              Developer
            </h3>
            <p>
              As a junior full stack developer, I am driven to succeed and have
              honed my skills in web development and various JavaScript
              frameworks. I am proud to have completed a rigorous, six-month
              fullstack coding bootcamp at the esteemed University of Toronto,
              earning a final grade of 96%.
            </p>

            <p>
              As someone from a blue-collar background, I possess a keen eye for
              detail and a determined work ethic that permeates everything I
              create. I am highly motivated, unafraid of hard work, and
              consistently pursue further education in the field of web
              development on a daily basis.
            </p>
          </div>

          <div className='about__contact'>
            <ul>
              <li>
                <span className='bolded'>Name:</span> Jon Ledo
              </li>
              <li>
                <span className='bolded'>Email:</span>{' '}
                <a href='mailto:'>jonledo.codes@gmail.com</a>
              </li>
              <li>
                <span className='bolded'>From:</span> Toronto, Ontario
              </li>
            </ul>

            <a href={MyPDFFile} download>
              <button type='button'>Download CV</button>
            </a>
          </div>
        </div>

        <div className='about__skills-container'>
          <h3>My Skillset</h3>
          <span className='underline'></span>

          <div className='about__skills-list'>
            <ul>
              <li>
                <FaHtml5 style={{ color: '#E14C24' }} />
                <p>HTML</p>
              </li>
              <li>
                <FaCss3Alt style={{ color: '#0098E3' }} />
                <p>CSS</p>
              </li>
              <li>
                <FaJs style={{ color: '#F7DE1E' }} />
                <p>JavaScript</p>
              </li>
              <li>
                <FaReact style={{ color: '#57D6EC' }} />
                <p>React</p>
              </li>
              <li>
                <FaBootstrap style={{ color: '#8211FB' }} />
                <p>Bootstrap</p>
              </li>
              <li>
                <FaSass style={{ color: '#C8648E' }} />
                <p>SASS</p>
              </li>
              <li>
                <FaNodeJs style={{ color: '#80BC04' }} />
                <p>Node.js</p>
              </li>
              <li>
                <SiExpress style={{ color: '#333333' }} />
                <p>Express.js</p>
              </li>
              <li>
                <FaNpm style={{ color: '#C32227' }} />
                <p>NPM</p>
              </li>
              <li>
                <SiMysql style={{ color: '#266A88' }} />
                <p>MySQL</p>
              </li>
              <li>
                <SiMongodb style={{ color: '#1A8835' }} />
                <p>MongoDB</p>
              </li>
              <li>
                <FaGitAlt style={{ color: '#DB4C33' }} />
                <p>Git Collab</p>
              </li>
              <li>
                <FaGithub style={{ color: '#161B22' }} />
                <p>Github</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
