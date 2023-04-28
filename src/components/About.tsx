
import Layout from './Layout'
import { flexCenter } from '../_mixin'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Quotes from './Quotes'

const About = () => {
    const [spinnerIdx, setSpinnerIdx] = useState<number>(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
          setSpinnerIdx(prevIdx => (prevIdx + 1) % 3)
        }, 3000)
        return () => clearInterval(intervalId)
      }, [])

  return (
    <>
        <Layout className='py-10'>
          <div className={`w-full ${flexCenter} flex-col`}>
              This page is still under construction.<br />
              <Spinner idx={spinnerIdx}/>
          </div>
          <Quotes />
        </Layout>
    </>
  )
}

export default About