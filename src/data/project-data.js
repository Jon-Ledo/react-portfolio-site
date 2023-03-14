import pic1 from '../assets/project-images/pic-1.JPG'
import pic2 from '../assets/project-images/pic-2.JPG'
import pic3 from '../assets/project-images/pic-3.png'
import pic4 from '../assets/project-images/pic-4.JPG'

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
  {
    title: 'Social Network API',
    imgURL: `${pic3}`,
    info: 'An API built from the ground up for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. ',
    tech: ['Express', 'MongoDB', 'Mongoose', 'moment.js'],
    github: 'https://github.com/Jon-Ledo/NoSQL-Social-Network-API',
    url: '',
  },
  {
    title: 'Personal Bookshelf',
    imgURL: `${pic4}`,
    info: 'A web page designed to store book data, user data and reviews data in a SQL database, to be rendered on a browser for the user to interact with. The user will have the ability to look at a catalogue of books on the website, look at reviews for a book, add them to their own "personal bookshelf", as well as update and delete books and reviews.',
    tech: ['Node Express', 'Bcrypt', 'handlebars', 'MySQL', 'Sequelize'],
    github: 'https://github.com/Jon-Ledo/FullStack-My-Personal-Bookshelf',
    url: 'https://guarded-sierra-08744.herokuapp.com/',
  },
]

export default data
