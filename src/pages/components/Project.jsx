const Project = ({ data }) => {
  return (
    <div className='project'>
      <div className='project__img-container'>
        <img src={data.imgURL} alt={data.title} />

        <div className='project__overlay'>
          <div className='project__overlay-hover'>
            <h3 className='project__title'>{data.title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
