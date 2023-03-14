// import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoOpenOutline } from 'react-icons/io5'

const Project = ({ data }) => {
  // 🌟 NOTE Removign the modal component for now. More focused on getting site ready. Will update later. Noit convinced a modal is even necessary

  // const [viewModal, setViewModal] = useState(false)

  // const handleClick = (e) => {
  //   const target = e.target.closest('.project').lastChild
  //   console.log(target)

  //   setViewModal(!viewModal)
  // }

  return (
    <div className='project'>
      <div className='project__img-container'>
        <img src={data.imgURL} alt={data.title} />

        <div className='project__overlay'>
          <div className='project__overlay-hover'>
            <h3 className='project__title'>{data.title}</h3>
            <span className='underline'></span>

            <p className='project__tech'>
              {data.tech.map((tech, index) => {
                if (index < data.tech.length - 1) {
                  return `${tech} | `
                } else return `${tech}`
              })}
            </p>

            <div className='project__links'>
              {data.url === '' ? null : (
                <a href={data.url} target='_blank' rel='noreferrer'>
                  Live Site <IoOpenOutline />
                </a>
              )}

              <a href={data.github} target='_blank' rel='noreferrer'>
                Repo <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* {viewModal ? (
        <div className='project__modal'>
          <div className='box'>
            <h1>BOX</h1>
          </div>
        </div>
      ) : null} */}
    </div>
  )
}

export default Project
