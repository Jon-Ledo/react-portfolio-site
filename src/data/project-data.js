import pic1 from '../assets/project-images/pic-1.JPG'
import pic2 from '../assets/project-images/pic-2.JPG'

const data = [
  {
    title: 'timelapse',
    imgURL: `${pic1}`,
    info: 'Timelapse generates animated timelapse GIFs based on images that are uploaded by users over a specified time and frequency. Our project was a collaborative effort, with each team member bringing their unique skills and perspectives to the table to achieve our shared goals. Our project was a true collaboration, with everyone contributing their time and effort to ensure that we achieved the best possible outcome.',
    tech: ['MERN Stack', 'Multer', 'Nodemailer', 'Make-a-Gif', 'Firebase'],
    github: 'https://github.com/mbenitez1607/time_lapse',
    url: 'https://timelapse1.herokuapp.com/',
  },
  {
    title: 'standard techblog',
    imgURL: `${pic2}`,
    info: "A blog site setup where developers and other tech savvy people can publish their blog posts and comment on other users' posts as well.Deployed to Heroku, it follows the MVC paradigm in its architectural structure, using express-handlebars as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
    tech: ['MySQL', 'Node Express', 'Bcrypt', 'handlebars'],
    github: 'https://github.com/Jon-Ledo/Fullstack-tech-blog-using-handlebars',
    url: 'https://tech-blog-crud-app-15634.herokuapp.com/',
  },
]

export default data
