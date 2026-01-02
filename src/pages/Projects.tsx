import AnimatedText from '../components/AnimatedText'
import twobpImg from '/projects/two-b-precise.jpg'
import pgImg from '/projects/private-garden.jpg'
import cssQuidditchGameImg from '/projects/css-quidditch-game.jpg'
import ProjectCard from '../components/ProjectCard'
const PROJECT_TYPE = {
    frontend: 'Frontend Project' ,
    fullstack:  'Full Stack Project' ,
    AI: 'AI Project' 
} as const

type ProjectType = typeof PROJECT_TYPE[keyof typeof PROJECT_TYPE]


const Projects = () => {
    return (
          <main className='page-layout'>
              <AnimatedText text='Projects' className='page-header'/>
              <div className='flex flex-col gap-16'>
                  {PROJECTS.filter(project => project.show).map(project => {
                      const color =
                          project.type === PROJECT_TYPE.fullstack
                              ? 'text-primary'
                              : project.type === PROJECT_TYPE.AI
                              ? 'text-blue-500'
                              : 'text-secondary'

                      return (
                          <ProjectCard key={project.title}>
                              <ProjectCard.Media
                                  img={project.img}
                                  video={project.video}
                                  link={project.link}
                                  title={project.title}
                              />

                              <ProjectCard.Content>
                                  <ProjectCard.Type type={project.type} color={color} />
                                  <ProjectCard.Title title={project.title} link={project.link} />
                                  <ProjectCard.Summary>{project.summary}</ProjectCard.Summary>
                                  <ProjectCard.About about={project.about} />
                                  <ProjectCard.Actions githubLink={project.githubLink} link={project.link} />
                              </ProjectCard.Content>
                          </ProjectCard>
                      )
                  })}
              </div>
          </main>
    )
}

export default Projects

type ProjectCardProps = {
    show: boolean
    type: ProjectType
    title: string
    summary: string
    about: {
        frontend?: string
        backend?: string
        database?: string
        tools?: string
    }
    img?: string
    video?: string
    link?: string
    githubLink?: string
}

const PROJECTS: ProjectCardProps[] = [
    {
        show: true,
        type: PROJECT_TYPE.AI,
        title: 'Revit MCP',
        summary: `An MCP (Model Context Protocol) server that connects to Autodesk Revit, enabling architects, engineers and designers to automate BIM workflows through natural language. \n Demonstrated capabilities include opening floor plans across 12 levels, applying view templates, creating sheets, and exporting quantity schedules—all accomplished in minutes without manual intervention. The server allows Claude to generate and execute Revit API code instantly, streamlining modeling, filtering, and parameter management tasks for advanced Revit users.`,
        about: {
            tools: 'C#, .NET Framework 4.8, .NET Core 8.0, Revit API, MCP Protocol, '
        },
        video: '/projects/mcp.mov',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7384090711794733056/'
    },
    {
        show: true,
        type: PROJECT_TYPE.fullstack,
        title: 'Realistix',
        summary: `Realistix simplifies the path from BIM to visualization by connecting Autodesk Revit with Google’s AI rendering models. It lets designers generate professional images and videos from structured Revit views while keeping layouts, aspect ratios, and project outputs consistent and organized.`,
        about: {
            frontend: 'React, SCSS, Vite, TypeScript',
            backend: 'AWS EC2 Ubuntu & S3, Github Actions CI/CD, Node.js, Express, TypeScript',
            database: 'MongoDB Atlas'
        },
        video: '/projects/realistix-blend.mp4',
        link: 'https://www.realistix.co/',
        
    },
    {
        show: false,
        type: PROJECT_TYPE.fullstack,
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
        type: PROJECT_TYPE.frontend,
        title: 'CSS Quidditch Game',
        summary: `a short game to practice 3D in CSS`,
        about: {
            frontend: 'React, TypeScript, Vite, SCSS',
            backend: '',
            database: ''
        },
        img: cssQuidditchGameImg,
        video: '/projects/css-quiditch-game.mp4',
        link: 'https://css-quiditch-game.onrender.com/',
        githubLink: 'https://github.com/IdoBand/css-quiditch-game',
    },
    {
        show: true,
        type: PROJECT_TYPE.frontend,
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
];