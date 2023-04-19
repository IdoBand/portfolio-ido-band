import homePortfolioImage from '/assets/homePortfolioImage.png'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { Link } from 'react-router-dom'
import { flexCenter } from '../_mixin'
import { LinkArrow } from './Icons'
import Footer from './Footer'
export default function Home() {
    return (
        <>
            <main className={`flex items-center text-dark w-full min-h-screen`}>
                <Layout className='pt-0'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='w-1/2'>
                          <img src={homePortfolioImage} className='w-auto h-auto rounded-full' />
                        </div> 
                        <div className='w-1/2 flex flex-col items-center'>
                            <AnimatedText text='Turning Ideas Into Reality With Code And Design.' className='!text-6xl !text-left'/>
                            <p className='my-4 text-base font-medium'>
                                Hi, my name is Ido. As a full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                            </p>
                            <div className='flex items-center self-start mt-2'>
                                <Link to={'mailto:ido.bandd@gmail.com'} target={"_blank"} 
                                className={`${flexCenter} bg-dark text-light rounded-lg p-2.5 px-6 text-lg
                                        hover:bg-light hover:text-dark border-2 hover:border-solid hover:border-black`}
                                >
                                    Resume <LinkArrow className='w-6' ml-1/>
                                </Link>
                                <Link to={'mailto:ido.bandd@gmail.com'} target={"_blank"}
                                className="ml-4 text-lg font-medium underline"
                                >Contact</Link>
                            </div>
                        </div>
                    </div>
                    
                </Layout>
            </main>
            <Footer />
        </>
    )
}