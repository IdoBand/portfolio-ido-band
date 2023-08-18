import { Link, Outlet } from 'react-router-dom'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, GmailIcon, SunIcon, MoonIcon } from './Icons'
import { flexCenter, fixedTransformCenter } from '../_mixin'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
import { useState } from 'react'
interface CustomLinkProps {
    to: string
    title: string
    className: string
    toggle?: () => void
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

const CustomMobileLink = ({to, title, className="", toggle}: CustomLinkProps) => {
    const handleClick = () => {
        if (toggle) {
            toggle()
        }
    }
    return (
    <Link to={to} className={`${className} relative group  text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}
        <span className='h-[2px] inline-block w-0 bg-light
        absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-dark
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
            className={`${className} sm:mx-1 lg:w-4`}
            >{icon}
        </motion.a>
    )}

export default function Navbar() {
    const { mode, setMode } = useThemeSwitcher()
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const handleMenuIsOpen = () => {
        setMenuIsOpen(prevOpen => !prevOpen)
    }
    return (
        <>
        <header className={` w-full h-20 px-32 font-medium flex items-center justify-between relative bg-light
        dark:bg-dark dark:text-light
        lg:justify-start lg:p-10
        `}>
            <button 
                className={`${flexCenter} hidden text-xl lg:flex`}
                onClick={handleMenuIsOpen}
                >
                {menuIsOpen ? 'X' : '\u2630'}
            </button>
            <Logo />
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink to='/' title='Home' className='mr-4'/>
                    <CustomLink to='/About' title='About' className='mx-4'/>
                    <CustomLink to='/Projects' title='Projects' className='ml-4'/>
                    <CustomLink to='/Curtain' title='Curtain' className='ml-4'/>
                </nav>
                
                <nav className={`${flexCenter} flex-wrap`}>
                    <CustomA href='https://www.linkedin.com/in/ido-band/' icon={<LinkedInIcon className={''}/>} className='mr-3'/>
                    <CustomA href='mailto:ido.bandd@gmail.com' icon={<GmailIcon className={''}/>} className='mx-3'/>
                    <CustomA href='https://github.com/IdoBand' icon={<GithubIcon className={''}/>} className='ml-3'/>
                    <button 
                        onClick={ () => setMode(mode === 'dark' ? 'light' : 'dark') }
                        className={`${flexCenter} ml-5 p-1 rounded-full lg:w-5
                        ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                        `}
                        >
                            {mode === 'dark' ? <SunIcon className='lg:w-5'/> : <MoonIcon className='lg:w-5'/>}
                    </button>
                </nav>
            </div>

            {menuIsOpen &&
                <motion.div 
                initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
                animate={{scale: 1, opacity: 1}}
                className={`min-w-[70vw] flex flex-col justify-between items-center ${fixedTransformCenter}
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-30
            `}>
                <nav className={`${flexCenter}  flex-col`}>
                    <CustomMobileLink to='/' title='Home' className='' toggle={handleMenuIsOpen}/>
                    <CustomMobileLink to='/About' title='About' className='' toggle={handleMenuIsOpen}/>
                    <CustomMobileLink to='/Projects' title='Projects' className='' toggle={handleMenuIsOpen}/>
                </nav>
                
                <nav className={`${flexCenter} flex-wrap mt-3`}>
                    <CustomA href='https://www.linkedin.com/in/ido-band/' icon={<LinkedInIcon className={''}/>} className='mr-3'/>
                    <CustomA href='mailto:ido.bandd@gmail.com' icon={<GmailIcon className={''}/>} className='mx-3'/>
                    <CustomA href='https://github.com/IdoBand' icon={<GithubIcon className={'text-light dark:text-dark'}/>} className='ml-3'/>
                    <button 
                        onClick={ () => setMode(mode === 'dark' ? 'light' : 'dark') }
                        className={`${flexCenter} ml-5 p-1 rounded-full 
                        ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                        `}
                        >
                            {mode === 'dark' ? <SunIcon className=''/> : <MoonIcon className=''/>}
                    </button>
                </nav>
            </motion.div>
            }
        </header>
        <Outlet />
        </>
    )
}