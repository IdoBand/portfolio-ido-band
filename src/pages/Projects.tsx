import AnimatedText from '../components/AnimatedText'
import { Link } from 'react-router-dom'
import { GithubIcon } from '../components/Icons'
import htImg from '/projects/hour-tracker.jpg'
import twobpImg from '/projects/two-b-precise.jpg'
import pgImg from '/projects/private-garden.jpg'
import wordleImg from '/projects/wordle.jpg'
import cssQuidditchGameImg from '/projects/css-quidditch-game.jpg'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
          <main className='page-layout'>
              <AnimatedText text='Projects' className='page-header'/>
              <div className='flex flex-col gap-16'>  
                  {PROJECTS.filter(project => project.show).map(project => (
                      <ProjectCard {...project} key={project.title} />
                  ))}
              </div>
          </main>
    )
}

export default Projects


const ProjectCard = ({ type, title, summary, about, img, link, githubLink }: ProjectCardProps) => {
    const { firstIntersection, htmlElementRef } = useIntersectionObserver()

    return (
        <motion.article 
            initial={{
                opacity: 0,
                y: 100,
            }}
            animate={{
                opacity: firstIntersection ? 1 : 0,
                y: firstIntersection ? 0 : 100,
                transition: {
                    duration: 0.6
                }
            }}
            ref={htmlElementRef} 
                className='
                relative rounded-3xl
                before:absolute before:w-[100%] before:h-[103%] before:left-3  before:top-1 before:bg-dark
                before:rounded-3xl md:before:h-[102%]
            '>
                <motion.section
                    className='
                            w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl p-8
                            border border-solid border-dark dark:border-light
                            bg-light shadow-2xl
                            dark:bg-dark dark:text-light
                            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
                        '>
                <Link to={link} 
                        target='_blank' 
                        className='
                            w-1/2 cursor-pointer overflow-hidden rounded-lg
                            lg:w-full overflow-x-hidden
                        '>
                    <motion.img
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.4
                            }
                        }}
                        src={img}
                        alt={title}
                        className='w-full h-auto' />
                </Link>
                <div
                    className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-3
                '>
                    <span className={`font-medium text-xl xs:text-base ${type === 'fullstack' ? 'text-primary' : 'text-secondary'}`}>
                        {type === 'fullstack' ? 'Full Stack' : 'Frontend'} Project
                    </span>
                    <Link to={link} target='_blank' className='hover:underline hover:underline-offset-2'>
                        <h2 className='text-dark my-2 w-full text-left text-4xl font-bold sm:text-xl'>{title}</h2>
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
                        <motion.div
                            whileHover={{ scale: 1.1,
                            transition: {
                                duration: 0.5,
                                type: "spring",
                                stiffness: 1000,
                                damping: 15,
                            }
                            }}
                        >
                        <Link to={link} 
                            target='_blank' 
                            className='
                                ml-4 rounded-lg bg-dark text-light text-lg 
                                p-2 px-6 font-semi-bold
                                dark:bg-light dark:text-dark
                                sm:px-4 sm:text-base
                                '
                                >
                                Visit Project
                        </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.article>
    )
}

type ProjectCardProps = {
    show: boolean
    type: 'frontend' | 'fullstack'
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

const PROJECTS: ProjectCardProps[] = [
    {
        show: true,
        type: 'fullstack',
        title: 'Private Garden',
        summary: `This app helps you monitor your own garden, create a timeline for each plant, identify plants by uploading images and more...`,
        about: {
            frontend: 'React, SCSS, Vite, TypeScript',
            backend: 'AWS EC2 Ubuntu & S3, Github Actions CI/CD, Node.js, Express, TypeScript',
            database: 'MongoDB Atlas'
        },
        img: pgImg,
        link: 'https://private-garden.onrender.com/',
        githubLink: 'https://github.com/IdoBand/private-garden',
    },
    {
        show: true,
        type: 'frontend',
        title: '2bPrecise Replica',
        summary: `Recreation of a cool and interactive homepage design.`,
        about: {
            frontend: 'React, TypeScript, Vite, gsap',
            backend: '',
            database: ''
        },
        img: twobpImg,
        link: 'https://twobprecise-replica.onrender.com/',
        githubLink: 'https://github.com/IdoBand/2bprecise-replica',
    },
    {
        show: true,
        type: 'frontend',
        title: 'CSS Quidditch Game',
        summary: `a short game to practice 3D in CSS`,
        about: {
            frontend: 'React, TypeScript, Vite, SCSS',
            backend: '',
            database: ''
        },
        img: cssQuidditchGameImg,
        link: 'https://css-quiditch-game.onrender.com/',
        githubLink: 'https://github.com/IdoBand/css-quiditch-game',
    },
    {
        show: true,
        type: 'fullstack',
        title: 'Hour Tracker',
        summary: `An app that helps you keep track of your work hours, automatically calculate your salary and can be used as a diary for tasks as well.`,
        about: {
            frontend: 'Next.js 13, React, TypeScript, Tailwind CSS',
            backend: 'Next.js 13',
            database: 'PostgresSQL'
        },
        img: htImg,
        link: 'https://hour-tracker.vercel.app/',
        githubLink: 'https://github.com/IdoBand/hour-tracker',
    },
    {
        show: false,
        type: 'fullstack',
        title: 'Wordle',
        summary: `A word-guessing game where players attempt to guess a hidden five-letter word by making multiple guesses and receiving feedback on the correctness of each guess.`,
        about: {
            frontend: 'React, Tailwind CSS, Vite, TypeScript',
            backend: 'AWS - EC2 Ubuntu, Node.js, Express, TypeScript',
            database: 'PostgresSQL'
        },
        img: wordleImg,
        link: 'https://wordle-game-lgye.onrender.com/',
        githubLink: 'https://github.com/IdoBand/wordle',
    }
];