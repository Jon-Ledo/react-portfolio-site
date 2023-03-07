const Card = ({ data }) => {
  return (
    <div className='card'>
      <p className='card-year'>{data.year}</p>
      <h4 className='card-subject'>{data.subject}</h4>
      <p className='card-school red-text'>{data.school}</p>
      <p className='card-desc'>{data.desc}</p>
    </div>
  )
}

export default Card
