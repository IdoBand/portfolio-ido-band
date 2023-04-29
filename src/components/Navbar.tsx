import { Link, Outlet } from 'react-router-dom'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, GmailIcon, SunIcon, MoonIcon } from './Icons'
import { flexCenter } from '../_mixin'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
interface CustomLinkProps {
    to: string
    title: string
    className: string
}

const CustomLink = ({to, title, className=""}: CustomLinkProps) => {
    return (
    <Link to={to} className={`${className} relative group`}>
        {title}
        <span className='h-[2px] inline-block w-0 bg-dark 
        absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-light
        '>&nbsp;</span>
    </Link>
)}
interface CustomAProps {
    href: string
    icon: JSX.Element
    className: string
}
const CustomA = ({href, icon, className}: CustomAProps) => {
    return (
        <motion.a href={href}
            target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className={`${className}`}
            >{icon}
        </motion.a>
    )}

export default function Navbar() {
    const { mode, setMode } = useThemeSwitcher()
    return (
        <>
        <header className={`w-full h-20 px-32 font-medium flex items-center justify-between relative bg-light
        dark:bg-dark
        dark:text-light
        `}>
            <nav>
                <CustomLink to='/' title='Home' className='mr-4'/>
                <CustomLink to='/About' title='About' className='mx-4'/>
                <CustomLink to='/Projects' title='Projects' className='ml-4'/>
            </nav>
            <Logo />
            <nav className={`${flexCenter} flex-wrap`}>
                <CustomA href='https://www.linkedin.com/in/ido-band/' icon={<LinkedInIcon className={''}/>} className='mr-3'/>
                <CustomA href='mailto:ido.bandd@gmail.com' icon={<GmailIcon className={''}/>} className='mx-3'/>
                <CustomA href='https://github.com/IdoBand' icon={<GithubIcon className={''}/>} className='ml-3'/>
                <button 
                    onClick={ () => setMode(mode === 'dark' ? 'light' : 'dark') }
                    className={`${flexCenter} ml-5 p-1 rounded-full 
                    ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                    `}
                    >
                        {mode === 'dark' ? <SunIcon className=''/> : <MoonIcon className=''/>}
                </button>
            </nav>
                
        </header>
        <Outlet />
        </>
    )
}