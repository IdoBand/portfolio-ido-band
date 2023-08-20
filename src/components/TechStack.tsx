import { CssIcon, HtmlIcon, JavaScriptIcon, ReactIcon, SassIcon, TypeScriptIcon, TailwindIcon } from './Icons'
import { motion } from 'framer-motion'
const Icons = [
    <HtmlIcon className='mx-3' key={'HtmlIcon'} />,
    <CssIcon className='mx-3' key={'CssIcon'} />,
    <TypeScriptIcon className='mx-3' key={'TypeScriptIcon'} />,
    <ReactIcon className='mx-3' key={'ReactIcon'} />,
    <JavaScriptIcon className='mx-3' key={'JavaScriptIcon'} />,
    <SassIcon className='mx-3' key={'SassIcon'} />,
    <TailwindIcon className='w-8 mx-3' key={'TailwindIcon'} />,
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
        },
    }
}
const TechStack = () => {
  return (
        <motion.div className='flex justify-start items-center w-full whitespace-nowrap ml-3 font-semibold tracking-wider flex-wrap lg:justify-center'
            variants={techStackContainer}
            initial="initial"
            animate="animate"
            >
            TECH STACK |
            <div className='flex flex-wrap'>
            {Icons.map((icon, idx) => {
                return <motion.span 
                    key={idx}
                    variants={techStackChild}
                    className='md:py-2'
                    >
                        {icon}
                    </motion.span>
            })}
            </div>
        </motion.div>
  )
}

export default TechStack