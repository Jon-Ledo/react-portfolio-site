import Card from './components/Card'
import data from '../data'

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

        <button type='button'>Download CV</button>
      </div>
    </section>
  )
}

export default Resume
