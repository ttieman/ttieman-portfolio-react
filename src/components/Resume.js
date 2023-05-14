import React from "react"; // import the React library
import resumePdf from "../data/Tanner_Tieman__-_Entry_Level_Full_Stack_Developer.pdf"; // import the resume.pdf file from the assets folder
import '../styles/resume.css'

const Resume = () => {
        return (
            <section>
                <h1 className="title">Resume</h1>
                <p className="greeting">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut elit ut lacus
                </p>
                <hr className="line"></hr>
                <div className="skill-container">
                    <div className="card-container card p-3 my-3">
                        <h2 className="front-end">Front-end Proficiencies</h2>
                        <ul className="front-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="card-container card p-3 my-3">
                        <h2 className="back-end">Back-end Proficiencies</h2>
                        <ul className="back-list">
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                        </ul>
                    </div>    
                </div>
                <div>
                    <h2 className="download-heading">Download My Resume Here</h2>
                    <a className='download-link'href={resumePdf} download>Download Resume</a>
                </div>
            </section>
        )

}

export default Resume; // export the Resume function so that it can be imported into other files