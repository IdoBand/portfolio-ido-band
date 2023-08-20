import { CircularSvg } from "./Icons"
import { Link } from 'react-router-dom'
const HireMe = () => {
  return (
    <div className={`absolute right-2 z-30 top-2 flex-center overflow-hidden md:right-0 md:top-0 `}>
        <div className={`flex-center relative spin-slow md:w-24`}>
            <CircularSvg className={"fill-dark animate-spin-slow dark:fill-light"}/>
            <Link to='mailto:ido.bandd@gmail.com'
                    className={`flex-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                bg-dark text-light shadow-md  
                                w-20 h-20 rounded-full font-semibold border font-mont
                                hover:bg-light hover:text-dark hover:border-solid hover:border-dark
                                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                                md:w-14 md:h-14 md:text-xs
                                `}>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe