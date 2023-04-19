import { Link, Outlet } from 'react-router-dom'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, GmailIcon } from './Icons'
import { flexCenter } from '../_mixin'
import { motion } from 'framer-motion'
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
            className={`${className} w-6`}
            >{icon}</motion.a>
    )}



export default function Navbar() {
    return (
        <>
        <header className={`w-full px-32 font-medium flex items-center justify-between`}>
            <nav>
                <CustomLink to='/' title='Home' className='mr-4'/>
                <CustomLink to='/About' title='About' className='mx-4'/>
                <CustomLink to='/Projects' title='Projects' className='mx-4'/>
                <CustomLink to='/Articles' title='Articles' className='ml-4'/>
            </nav>
            <Logo />
            <nav className={`${flexCenter} flex-wrap`}>
                <CustomA href='' icon={<LinkedInIcon className={''}/>} className='mr-3'/>
                <CustomA href='' icon={<GmailIcon className={''}/>} className='mx-3'/>
                <CustomA href='' icon={<GithubIcon className={''}/>} className='ml-3'/>
            </nav>
        </header>
        <Outlet />
        </>
    )
}