import { CssIcon, HtmlIcon, JavaScriptIcon, ReactIcon, SassIcon, TypeScriptIcon, TailwindIcon } from './Icons'

const ICONS = [
    <HtmlIcon className='mx-3'/>,
    <CssIcon className='mx-3' />,
    <TypeScriptIcon className='mx-3' />,
    <ReactIcon className='mx-3' />,
    <JavaScriptIcon className='mx-3' />,
    <SassIcon className='mx-3' />,
    <TailwindIcon className='w-8 mx-3' />,
]

const multiply = Array.from(Array(10).keys())

interface LogosSlideProps {
    variant: 'one' | 'two' | 'three' | 'four'
}
const LogosSlide = ({variant}: LogosSlideProps) => {
  return (
    <article className={`slide-container`}>
        {multiply.map((_, idx) => {
            return (
        <div key={idx + 10000} className={`logos-slide ${variant}`}>
            {ICONS.map((icon, idx) => {
                return <span key={idx}>{icon}</span>
            })}
        </div>)
        })}
    </article>
  )
}

export default LogosSlide