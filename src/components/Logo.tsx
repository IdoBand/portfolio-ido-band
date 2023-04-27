
import { Link } from 'react-router-dom'
import { flexCenter, absoluteTransformCenter } from '../_mixin'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div className={`${flexCenter} mt-2`}>
        <MotionLink to={"/"} className={`w-16 h-16 bg-dark text-light ${flexCenter} mt-2 rounded-full text-2xl ${absoluteTransformCenter}`}
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition: {duration: 1, repeat: Infinity}
            }}
        >IB</MotionLink>
    </div>
  )
}

export default Logo