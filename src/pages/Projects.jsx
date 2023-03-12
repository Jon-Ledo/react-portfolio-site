import Project from './components/Project'
import data from '../data/project-data'

const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='page-wrapper'>
        <div className='title-container'>
          <div className='bars'></div>
          <h2>Projects</h2>
          <div className='bars'></div>
        </div>
        <span className='underline'></span>

        <div className='projects__container'>
          {data.map((item, index) => {
            return <Project data={item} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
