import '../style/navbar.css';
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [contactVisible, setContactVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [blogVisible, setBlogVisible] = useState(false);
    const [serviceVisible, setServiceVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = ['home', 'about', 'contact', 'blog', 'login','service'];

            // Check if contact section is in view
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setContactVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                setAboutVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
            const serviceSection = document.getElementById('about');
            if (serviceSection) {
                const rect = serviceSection.getBoundingClientRect();
                setServiceVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                const rect = blogSection.getBoundingClientRect();
                setBlogVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }

            
            let activeSection = 'home'; 
            for (const section of sections) {
                const element = document.getElementById('home');
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                        activeSection = section;
                        break;
                    }
                }
            }

            setActiveLink(contactVisible ? 'contact' : activeSection);
            setScrolled(scrollY > 50);
            setActiveLink(serviceVisible ? 'service' : activeSection);
            setScrolled(scrollY > 50);
            setActiveLink(aboutVisible ? 'about' : activeSection);
            setScrolled(scrollY > 50);
            setActiveLink(blogVisible ? 'blog' : activeSection);
            setScrolled(scrollY > 50);
           
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [contactVisible,aboutVisible,blogVisible, serviceVisible]);

    const handleContactClick = () => {
        setActiveLink('contact');
    };
    const handleAboutClick = () => {
        setActiveLink('about');
    };
    const handleBlogClick = () => {
        setActiveLink('blog');
    };
    const handleServiceClick = () => {
        setActiveLink('service');
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container className="px-0">
                <Navbar.Brand href="#home">
                    <img  className="logo" src={logo} alt="LOGO" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/service" className={(activeLink === 'service' || serviceVisible) ? 'active navbar-link' : 'navbar-link'} onClick={handleServiceClick}>Service</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className={(activeLink === 'blog' || blogVisible) ? 'active navbar-link' : 'navbar-link'} onClick={handleBlogClick} >Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={(activeLink === 'contact' || contactVisible) ? 'active navbar-link' : 'navbar-link'} onClick={handleContactClick}>Contact</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={handleAboutClick}>About</Nav.Link>
                        {/* <Nav.Link as={Link} to="/" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'}>Login</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
