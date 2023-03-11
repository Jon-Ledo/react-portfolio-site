import Card from './components/Card'
import data from '../data/data'
import MyPDFFile from '../assets/Jon_Ledo_Resume_2023_Fullstack-V1.0.pdf'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <div className='page-wrapper'>
        <div className='title-container'>
          <div className='bars'></div>
          <h2>Resume</h2>
          <div className='bars'></div>
        </div>
        <span className='underline'></span>

        <h3>My Education</h3>

        <div className=' resume__container'>
          {data.map((item, index) => {
            return <Card data={item} key={index} />
          })}
        </div>

        <a href={MyPDFFile} download>
          <button type='button'>Download CV</button>
        </a>
      </div>
    </section>
  )
}

export default Resume
