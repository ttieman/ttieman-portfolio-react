import React from 'react';

const Navbar = ({currentPage, handlePageChange}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand" href="#home">Tanner Tieman</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={() => handlePageChange('AboutMe')}>

                            <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item" onClick={() => handlePageChange('Portfolio')}>
                            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#projects">Portfolio</a>
                        </li>
                        <li className="nav-item" onClick={() => handlePageChange('Contact')}>
                            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#blog">Contact</a>
                        </li>
                        <li className='nav-item' onClick={() => handlePageChange('Resume')}>
                            <a className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'} href='#resume'>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );


};

export default Navbar;