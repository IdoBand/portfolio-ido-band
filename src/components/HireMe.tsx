import { flexCenter } from "../_mixin"
import { CircularSvg } from "./Icons"
import { Link } from 'react-router-dom'
const HireMe = () => {
  return (
    <div className={`fixed left-4 bottom-4 ${flexCenter} overflow-hidden`}>
        <div className={`w- 48 ${flexCenter} relative spin-slow`}>
            <CircularSvg className={"fill-dark animate-spin-slow"}/>
            <Link to='mailto:ido.bandd@gmail.com'
                    className={`${flexCenter} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                bg-dark text-light shadow-md  
                                w-20 h-20 rounded-full font-semibold border font-mont
                                hover:bg-light hover:text-dark hover:border-solid hover:border-dark
                                `}>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe