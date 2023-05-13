import React, {useState} from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';


export default function PortfolioContainer() {
        const  [currentPage, setCurrentPage] = useState('Home');
        const renderPage = () => {
            if (currentPage === 'AboutMe') {
                return <AboutMe />
            }
            if (currentPage === 'Portfolio') {
                return <Portfolio />
            }
            if (currentPage === 'Contact') {
                return  <Contact />
            }
            if (currentPage === 'Resume') {
                return <Resume />
            }            
            return <AboutMe />

        };
        const handlePageChange = (page) => setCurrentPage(page);
        return (
            <div>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                <main>
                    {renderPage()}
                </main>
                <Footer />
            </div>
        );

}
