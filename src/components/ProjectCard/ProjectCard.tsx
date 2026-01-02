import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { GithubIcon } from '../Icons'

// Main card wrapper
const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  const { firstIntersection, htmlElementRef } = useIntersectionObserver()

  return (
    <motion.article
      ref={htmlElementRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: firstIntersection ? 1 : 0,
        y: firstIntersection ? 0 : 100,
        transition: { duration: 0.6 }
      }}
      className="
        relative rounded-3xl
        before:absolute before:w-[100%] before:h-[103%] before:left-3 before:top-1 before:bg-dark
        before:rounded-3xl md:before:h-[102%]
      "
    >
      <section
        className="
          w-full flex items stretch relative rounded-br-2xl rounded-3xl p-8
          border border-solid border-dark dark:border-light
          bg-light dark:bg-dark dark:text-light
          shadow-2xl
          lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        "
      >
        {children}
      </section>
    </motion.article>
  )
}

// Media slot (restricted composition)
ProjectCard.Media = function Media({
  img,
  video,
  link,
  title
}: {
  img?: string
  video?: string
  link?: string
  title: string
}) {
  const MediaContent = video ? (
    <motion.video
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto"
    />
  ) : (
    <motion.img
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
      src={img}
      alt={title}
      className="w-full h-auto"
    />
  )

  return link ? (
    <Link
      to={link}
      target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
    >
      {MediaContent}
    </Link>
  ) : (
    <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
      {MediaContent}
    </div>
  )
}

// Content container
ProjectCard.Content = function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/2 pl-6 flex flex-col gap-3 lg:w-full lg:pl-0 lg:pt-4">
      {children}
    </div>
  )
}

// Type label
ProjectCard.Type = function Type({
  type,
  color
}: {
  type: string
  color?: string
}) {
  return (
    <span className={`font-medium text-xl xs:text-base ${color || 'text-secondary'}`}>
      {type}
    </span>
  )
}

// Title (link-aware)
ProjectCard.Title = function Title({
  title,
  link
}: {
  title: string
  link?: string
}) {
  const content = (
    <h2 className="text-dark dark:text-light my-2 w-full text-left text-4xl font-bold sm:text-xl">
      {title}
    </h2>
  )

  return link ? (
    <Link to={link} target="_blank" className="hover:underline hover:underline-offset-2">
      {content}
    </Link>
  ) : (
    content
  )
}

// Summary
ProjectCard.Summary = function Summary({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
      {children}
    </p>
  )
}

// About block (optional rows)
ProjectCard.About = function About({
  about
}: {
  about: {
    frontend?: string
    backend?: string
    database?: string
    tools?: string
  }
}) {
  return (
    <p className="my-2 text-dark dark:text-light sm:text-sm">
      {about.frontend && (
        <>
          <b>Frontend:</b> {about.frontend}
          <br />
        </>
      )}
      {about.backend && (
        <>
          <b>Backend:</b> {about.backend}
          <br />
        </>
      )}
      {about.database && (
        <>
          <b>Database:</b> {about.database}
          <br />
        </>
      )}
      {about.tools && (
        <>
          <b>Tools:</b> {about.tools}
        </>
      )}
    </p>
  )
}

// Actions
ProjectCard.Actions = function Actions({
  githubLink,
  link
}: {
  githubLink?: string
  link?: string
}) {
  return (
    <div className="mt-auto flex items-center gap-4">
      {githubLink && (
        <Link to={githubLink} target="_blank" className="w-10">
          <GithubIcon className="" />
        </Link>
      )}

      {link && (
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 1000,
              damping: 15
            }
          }}
        >
          <Link
            to={link}
            target="_blank"
            className="
              rounded-lg bg-dark text-light text-lg
              px-6 py-2 font-semibold
              dark:bg-light dark:text-dark
              sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectCard
