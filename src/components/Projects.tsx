import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { flexCenter } from '../_mixin'
import { Link } from 'react-router-dom'
import { GithubIcon } from './Icons'
import pgImg from '/assets/projects/privategarden.jpg'
interface FeaturedProjectProps {
    type: string
    title: string
    summary: string
    img: string
    link: string
    githubLink: string
}
const FeaturedProject = ({type, title, summary, img, link, githubLink}: FeaturedProjectProps) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl p-12
                            border border-solid border-dark dark:border-light
                            bg-light shadow-2xl
                            dark:bg-dark dark:text-light
                            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
                            '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] 
                    bg-dark dark:bg-light rounded-br-3xl
                    xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />
            <Link to={link} 
                    target='_blank' 
                    className='w-1/2 cursor-pointer overflow-hidden rounded-lg
                    lg:w-full
                    '>
                <img src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6
                lg:w-full lg:pl-0 lg:pt-3
            '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link to={link} target='_blank' className='hover:underline hover:underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light
                    sm:text-sm
                '>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link to={githubLink} target='_blank' className='w-10'><GithubIcon className=''/></Link>
                    <Link to={link} 
                          target='_blank' 
                          className='ml-4 rounded-lg bg-dark text-light text-lg 
                                        p-2 px-6 font-semi-bold
                                        dark:bg-light dark:text-dark
                                        sm:px-4 sm:text-base
                                        '
                            >
                            Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
  return (
    <>
        <main className={`${flexCenter} flex-col w-full bg-light dark:bg-dark dark:text-light`}>
            <Layout className='pt-8'>
                <AnimatedText text='Projects' className='mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 md:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type='Featured Project'
                            title='Private Garden'
                            summary={`This app can help you keep track of your own garden, create a timeline for each plant, identify plants by uploading images and more... This project consists of a frontend React application, a backend Node.js & Express server and MongoDB Atlas`}
                            img={pgImg}
                            link='https://private-garden.onrender.com/'
                            githubLink='https://github.com/IdoBand/private-garden'
                        />
                    </div>
                    <div className='col-span-6'>
                        {/* Project-1 */}
                    </div>
                    <div className='col-span-6'>
                        {/* Project-2 */}
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects