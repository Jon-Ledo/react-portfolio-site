const About = () => {
  return (
    <section id="about">
      <div className="about__container page-wrapper">

        <h2>About Me</h2>
        <span className="underline"></span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, perspiciatis modi quidem exercitationem voluptate soluta eveniet, a laboriosam enim consequuntur, est unde molestias aspernatur nisi. Sit aut nulla tenetur mollitia, consectetur, blanditiis dignissimos possimus, ad dolores nam dolore enim! Doloremque corrupti rem eos temporibus incidunt vitae debitis sint neque. Libero!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate maxime voluptatibus dolorum eligendi iusto modi nesciunt ex nulla at reiciendis quia neque quisquam facere labore qui autem, asperiores aspernatur non debitis quis vero! Cumque maiores, quasi maxime molestias enim ducimus eius accusantium nemo officia. Delectus veniam nostrum voluptate cupiditate!</p>

        <ul>
          <li>Name: Jon Ledo</li>
          <li>Email: <span className="">jonledo.codes@gmail.com</span></li>
          <li></li>
          <li></li>
        </ul>

        <button type="submit">Download CV</button>

        <div className="about__skills-container">
          <h3>My Skills</h3>

          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>

      </div>
    </section>
  )
}


export default About