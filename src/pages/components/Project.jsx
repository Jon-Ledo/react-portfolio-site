const Project = ({ data }) => {
  return (
    <div className='project'>
      <h3>Project 1</h3>
      {/* <img src={pic} alt='' /> */}
      {/* <img src={data[0].imgURL} alt='' /> */}
      <p>{data[0].info}</p>
    </div>
  )
}

export default Project
