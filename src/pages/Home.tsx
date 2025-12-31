import homePortfolioImage from '/newPortfolioImage.png'
import AnimatedText from '../components/AnimatedText'
import { Link } from 'react-router-dom'
import { LinkArrow } from '../components/Icons'
import TechStack from '../components/TechStack'

export default function Home() {

    return (
        <main className='page-layout w-screen'>
            <div className={`text-dark w-3/4 dark:text-light pt-10 lg:pt-2 absolute z-10 translate-center rounded-3xl p-6`}>
                <div className='flex-center gap-8 lg:flex-col lg:pt-12'>
                    <div className='bgGradient rounded-full border-8 border-solid border-lightGray p-4 mt-10 lg:w-2/3'>
                        <img src={homePortfolioImage} className='relative -bottom-4 w-auto h-auto rounded-full' />
                    </div>
                    <div className='w-[60%] flex flex-col items-center lg:w-full lg:text-center'>
                        <AnimatedText text="Hi, I'm Ido" 
                            className='
                            whitespace-normal
                            text-start
                            !text-6xl
                            xl:!text-5xl 
                            lg:!text-center lg:!text-6xl
                            md:!text-5xl
                            sm:!text-xl
                            lg:w-max
                        '/>
                        <p className='my-4 text-xl font-medium whitespace-normal md:w-[calc(100vw-25px)]'>
                        I currently work as a software developer in the Civil Engineering industry, 
                        Check out my latest projects, demonstrating my expertise in fullstack web development and the Revit API.
                        </p>
                        <TechStack />
                        <div className='flex items-center self-start my-4 lg:self-center'>
                            <Link to={'mailto:ido.bandd@gmail.com'} target={"_blank"} 
                            className={
                                `flex-center bg-dark text-light rounded-lg p-2.5 px-6 text-lg
                                hover:bg-light hover:text-dark border-2 border-dark hover:border-solid hover:border-black
                                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                                md:py-2 md:px-4 md:text-base
                                transition-all duration-150
                            `}
                            >
                                Contact Me
                            </Link>
                            <Link to={'https://www.linkedin.com/in/ido-band/'} target={"_blank"}
                                className="flex ml-4 text-lg font-medium underline">
                                    Linkedin <LinkArrow className='w-6 ml-1 lg:w-5'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}