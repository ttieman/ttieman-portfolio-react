import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    
    

    return(
        <section className="section">
            <div className='image-container'>

            <img className="image" src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <div className='content-container'>
            <h1 className='title'>About Me</h1>
            <p className='content'>
            <hr className='line'></hr>
                
Greetings! I am <span className='name'>JTanner Tieman</span>, an ambitious full-stack web developer equipped with a comprehensive skill set ranging from the essential HTML, CSS, JavaScript to advanced Node.js, Express.js, MySQL, MongoDB, and React.js. I also possess familiarity with Python, expanding my versatility in the technology domain.


            </p>
            <p className='content'>
            Recently, I successfully completed the intensive Coding Bootcamp at the University of Arizona, further solidifying my foundations and enhancing my competencies in web development. I'm actively looking for challenging roles in full-stack development that would allow me to showcase my expertise and contribute to a team's success. I'm also open to exploring freelance opportunities that can benefit from my skills.
            </p>

            <p className='content'>
            Apart from my technical prowess, my attributes as a diligent and fast learner enable me to adapt and thrive in dynamic work environments. I pride myself on being a team player who is always ready to extend support to colleagues, fostering a collaborative and productive work environment.  
            </p>
                </div>
         </section>
        );
}

export default AboutMe;