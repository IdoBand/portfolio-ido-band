
import { flexCenter } from '../_mixin'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'
const About = () => {
    const [spinnerIdx, setSpinnerIdx] = useState<number>(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
          setSpinnerIdx(prevIdx => (prevIdx + 1) % 3)
        }, 3000)
        return () => clearInterval(intervalId)
      }, [])

  return (
    <div className={`w-full py-20 ${flexCenter} flex-col`}>
        This page is still under construction.<br />
        <Spinner idx={spinnerIdx}/>
    </div>
  )
}

export default About