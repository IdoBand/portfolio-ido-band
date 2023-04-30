import { LinkArrow, CssIcon, HtmlIcon, JavaScriptIcon, ReactIcon, SassIcon, TypeScriptIcon } from './Icons'
import { motion } from 'framer-motion'
const Icons = [
    <HtmlIcon className='mx-3' />,
    <CssIcon className='mx-3' />,
    <TypeScriptIcon className='mx-3' />,
    <ReactIcon className='mx-3' />,
    <JavaScriptIcon className='mx-3' />,
    <SassIcon className='mx-3' />
]
const techStackContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08
        },
    }
}
const techStackChild = {
    initial: {
        opacity: 0,
        x: 50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.08
        },
    }
}
const TechStack = () => {
  return (
        <motion.div className='flex justify-start items-center w-full font-medium lg:justify-center xs:flex-wrap'
            variants={techStackContainer}
            initial="initial"
            animate="animate"
            >
            Tech Stack |
            {Icons.map((icon, idx) => {
                return <motion.span 
                    key={idx}
                    variants={techStackChild}
                    className='md:py-2'
                    >
                        {icon}
                    </motion.span>
            })}
        </motion.div>
  )
}

export default TechStack