import { flexCenter } from "../_mixin"
import { motion } from 'framer-motion'
interface AnimatedTextProps {
    text: string
    className?: string
}

const entireQuote = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        },
    }
}
const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        },
    }
}
const AnimatedText = ({text, className=""}: AnimatedTextProps) => {
  return (
    <div className={`w-full mx-auto py-2 ${flexCenter} text-center ${className}
    sm:py-0
    `}>
        <motion.h1 className={`inline-block w-full font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={entireQuote}
        initial="initial"
        animate="animate"
        >
          {
            text.split(" ").map((word, idx) => {
                return (<motion.span key={word+'-'+idx} className="inline-block"
                variants={singleWord}
                // when using staggerChildren on the parent element we don't have to initialize "initial" and "animate"
                >
                    {word}&nbsp;
                </motion.span>)
            })
          }
        </motion.h1>
        
    </div>
  )
}

export default AnimatedText