import { GithubIcon, LinkedInIcon, GmailIcon } from './Icons'
import { motion, AnimatePresence } from 'framer-motion'

type ContactProps = {
    isMenuOpen: boolean
}
const Contact = ({isMenuOpen}: ContactProps) => {

  return (
    <AnimatePresence >
        <motion.section
            initial={{
                y: 100,
                opacity: 0
            }}
            animate={{
                y: isMenuOpen ? 0 : 100,
                opacity: isMenuOpen ? 1 : 0,
                transition: {
                    duration: 0.4,
                    delay: 0.5
                }
            }}
            exit={{
                y: 100,
                opacity: 0,
                transition: {
                    duration: 0.4,
                }
            }}
            className='bg-stone-800 p-2 bottom-0 left-2 w-max  fixed rounded-t-xl'>
            <CustomA href='https://www.linkedin.com/in/ido-band/' icon={<LinkedInIcon className={'my-2'}/>} className=''/>
            <CustomA href='mailto:ido.bandd@gmail.com' icon={<GmailIcon className={''}/>} className='my-2'/>
            <CustomA href='https://github.com/IdoBand' icon={<GithubIcon fillColor='#fff' className={'my-2'}/>} className=''/>
        </motion.section>
    </AnimatePresence>
  )
}

export default Contact
interface CustomAProps {
    href: string
    icon: JSX.Element
    className: string
}
const CustomA = ({href, icon, className}: CustomAProps) => {
    return (
        <motion.a 
            href={href}
            target={"_blank"}
            whileHover={{y: -2, scale: 1.1}}
            whileTap={{scale: 0.9}}
            className={`${className}`}
            >{icon}
        </motion.a>
    )}