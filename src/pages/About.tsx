import AnimatedText from '../components/AnimatedText'
import Quotes from '../components/Quotes'

const About = () => {
  return (
    <main className='page-layout'>
        <AnimatedText text='About' className='page-header'/>
          <Quotes />
    </main>
  )
}

export default About