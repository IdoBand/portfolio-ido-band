import { useState } from 'react'
import homeImg from '/home.jpg'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from './Contact'
import HireMe from './HireMe'
import aboutImg from '/about.jpg'
import projectsImg from '/projects.jpg'
import { MenuIcon, CloseIcon } from './Icons'
import { motion } from 'framer-motion'
const Curtain = () => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    function handleLinkClick(key: number) {
        setCurrentPage(key)
        setIsMenuOpen(false)
    }
  return (
    <>
        <section id='curtain-content-container' className={isMenuOpen ? 'open' : '' }>
        <HireMe />
            {LINKS[currentPage].page}
        </section>
        <button
            className='toggle-menu-button text-3xl text-light flex justify-center items-center'
            onClick={() => setIsMenuOpen(prev => !prev)}
            >
            
            <motion.span
                initial={{
                    rotate: 0,
                    scale: 1,
                    x: 40,
                    y: -20
                }}
                animate={{
                    rotate: isMenuOpen ? 90 : 0,
                    scale: isMenuOpen ? 0 : 1,
                    x: isMenuOpen ? 50 : -20,
                    y: isMenuOpen ? -20 : -48,
                    zIndex: 0,
                    transition: {
                        duration: 0.5,
                    }
                }}
            >
                <MenuIcon className='absolute' />
            </motion.span>
            <motion.span
                initial={{
                    rotate: -90,
                    scale: 0,
                    x: -40,
                    y: -5
                }}
                animate={{
                    rotate: isMenuOpen ? 0 : -90,
                    scale: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? -30 : -40,
                    y: isMenuOpen ? -50 : -5,
                    transition: {
                        duration: 0.2,
                    }
                }}
            >
                <CloseIcon className='absolute' />
            </motion.span>

        </button>
        <nav id='menu-nav'>
            <ul id='menu-nav-inner-container' className={isMenuOpen ? 'open' : '' }>
                {LINKS.map(link => {
                    return <li key={link.title} className={isMenuOpen ? 'menu-li open' : 'menu-li'} onClick={() => handleLinkClick(link.key)}>
                        <span className='li-title'>{link.title}</span>
                        <div style={{background: `url(${link.src})`}} className='li-img' />
                    </li>
                })}
            </ul>
            <Contact isMenuOpen={isMenuOpen} />
        </nav>
    </>
  )
}

export default Curtain

const LINKS = [
    {
        src: homeImg,
        title: 'Home',
        key: 0,
        page: <Home key={'home'} />
    },
    {
        src: projectsImg,
        title: 'Projects',
        key: 1,
        page: <Projects key={'projects'} />
    },
    {
        src: aboutImg,
        title: 'About',
        key: 2,
        page: <About key={'about'} />
    },
]
