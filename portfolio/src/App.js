import React, {useState} from "react";
import NavTabs from "./components/NavTabs";
import Resume from "./components/Resume";
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

export default function App () {
    const [currentPage, setcurrentPage] = useState('About')
    const renderPage =() => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }
    return (
        <div>
            
            <NavTabs setcurrentPage = {setcurrentPage}></NavTabs>
            
            {renderPage()}
            <Footer></Footer>
        </div>
        
    )
}