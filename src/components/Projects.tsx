import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { flexCenter } from '../_mixin'
import { Link } from 'react-router-dom'
import { GithubIcon } from './Icons'
import pgImg from '/assets/projects/newPrivateGarden.jpg'
import wordleImg from '/assets/projects/wordle.jpg'
import htImg  from '/assets/projects/hourTracker.jpg'
import twobpImg  from '/assets/projects/2bprecise.jpg'
interface FeaturedProjectProps {
    type: string
    title: string
    summary: string
    about: { 
        frontend: string
        backend: string
        database: string
    }
    img: string
    link: string
    githubLink: string
}
const FeaturedProject = ({type, title, summary, about, img, link, githubLink}: FeaturedProjectProps) => {
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
                <p className='my-2 text-dark dark:text-light
                    sm:text-sm'>
                        {about.frontend && <span className=''><b>Frontend:</b>{` ${about.frontend}`}</span>}<br />
                        {about.backend && <span className=''><b>Backend:</b>{` ${about.backend}`}</span>}<br />
                        {about.database && <span className=''><b>Database:</b>{` ${about.database}`}</span>}
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
                <div className='grid grid-cols-12 gap-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 md:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type='Featured Project'
                            title='2bPrecise Replica'
                            summary={`Recreation of a cool and interactive homepage design.`}
                            about={
                                {
                                frontend: 'React, TypeScript, Vite, gsap',
                                backend: '',
                                database: ''
                                }
                            }
                            img={twobpImg}
                            link='https://twobprecise-replica.onrender.com/'
                            githubLink='https://github.com/IdoBand/2bprecise-replica'
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type='Featured Project'
                            title='Hour Tracker'
                            summary={`An app that helps you keep track of your work hours, automatically calculate your salary and can be used as a diary for tasks as well.`}
                            about={
                                {
                                frontend: 'Next.js, React, TypeScript, Tailwind CSS',
                                backend: 'Next.js',
                                database: 'PostgresSQL'
                                }
                            }
                            img={htImg}
                            link='https://hour-tracker.vercel.app/'
                            githubLink='https://github.com/IdoBand/hour-tracker'
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type='Featured Project'
                            title='Private Garden'
                            summary={`This app helps you monitor your own garden, create a timeline for each plant, identify plants by uploading images and more...`}
                            about={
                                {
                                frontend: 'React, SCSS, Vite, TypeScript',
                                backend: 'AWS - EC2 Ubuntu, Node.js, Express, TypeScript',
                                database: 'MongoDB Atlas'
                                }
                            }
                            img={pgImg}
                            link='https://private-garden.onrender.com/'
                            githubLink='https://github.com/IdoBand/private-garden'
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type='Featured Project'
                            title='Wordle'
                            summary={`a word-guessing game where players attempt to guess a hidden five-letter word by making multiple guesses and receiving feedback on the correctness of each guess.`}
                            about={
                               {
                                frontend: 'React, Tailwind CSS, Vite, TypeScript',
                                backend: 'AWS - EC2 Ubuntu, Node.js, Express, TypeScript',
                                database: 'PostgresSQL'
                                }
                            }
                            img={wordleImg}
                            link='https://wordle-game-lgye.onrender.com/'
                            githubLink='https://github.com/IdoBand/wordle'
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}
export default Projects