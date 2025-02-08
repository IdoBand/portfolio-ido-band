import { useState } from 'react'
import homeImg from '/home.jpg'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import About from '../../pages/About'
import Contact from '../Contact'
import aboutImg from '/about.jpg'
import projectsImg from '/projects.jpg'
import './Curtain.scss'

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
            {LINKS[currentPage].page}
        </section>
        <button
            className='toggle-menu-button text-3xl text-light flex-center'
            onClick={() => setIsMenuOpen(prev => !prev)}
            >
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