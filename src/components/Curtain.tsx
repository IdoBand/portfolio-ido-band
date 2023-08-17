import { ReactNode, useState } from 'react'
import htImg from '/projects/hour-tracker.jpg'
import twobpImg from '/projects/two-b-precise.jpg'
import pgImg from '/projects/private-garden.jpg'
import wordleImg from '/projects/wordle.jpg'
import HomeTwo from '../pages/HomeTwo'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from './Contact'
import menuText from '/menuu.png'
const PAGES: Map<number, ReactNode> = new Map([
    [0, <HomeTwo />],
    [1, <Projects />],
    [2, <About />],
])

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
            {PAGES.get(currentPage)}
        </section>
        <button
            className='toggle-menu-button text-3xl text-light flex justify-center items-center'
            onClick={() => setIsMenuOpen(prev => !prev)}
            >
                IB
        </button>
        <nav id='menu-nav'>
            <ul id='menu-nav-inner-container' className={isMenuOpen ? 'open' : '' }>
                {LINKS.map(link => {
                    return <li key={link.title} className={isMenuOpen ? 'menu-li open' : 'menu-li'} onClick={() => handleLinkClick(link.key)}>
                        <span className='li-title'>{link.title}</span>
                        <img src={link.src} className='li-img' />
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
        src: pgImg,
        title: 'Home',
        key: 0
    },
    {
        src: pgImg,
        title: 'Projects',
        key: 1
    },
    {
        src: pgImg,
        title: 'About',
        key: 2
    },
]

const projects = [
    {
        src: pgImg,
        title: 'private garden'
    },
    {
        src: twobpImg,
        title: '2bprecise'
    },
    {
        src: htImg,
        title: 'hour tracker'
    },
    {
        src: wordleImg,
        title: 'wordle'
    },
    {
        src: wordleImg,
        title: 'wordle2'
    },
    {
        src: wordleImg,
        title: 'wordle3'
    },
]