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
            <hr></hr>
            <p className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut elit ut lacus
                sollicitudin varius. Nulla facilisi. Sed ut elit ut lacus sollicitudin varius.
                Nulla facilisi. Sed ut elit ut lacus sollicitudin varius. Nulla facilisi. Sed ut
            </p>
            <p className='content'>
                elit ut lacus sollicitudin varius. Nulla facilisi. Sed ut elit ut lacus sollicitudin
                varius. Nulla facilisi. Sed ut elit ut lacus sollicitudin varius. Nulla facilisi.
                Sed ut elit ut lacus sollicitudin varius. Nulla facilisi. Sed ut elit ut lacus
            </p>
                </div>
         </section>
        );
}

export default AboutMe;