import Layout from "./Layout"
import { Link } from "react-router-dom"
import HireMe from "./HireMe"
const Footer = () => {
  return (
    <footer className="w-full bg-light border-t-2 border-solid border-black font-mont text-lg
    dark:bg-dark dark:text-light dark:border-light
    sm:text-base
    ">
      <Layout className="flex py-8 items-center justify-between font-medium sm:flex-col xl:p-12">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link to='mailto:ido.bandd@gmail.com'>Say Hello</Link>
      </Layout>
      <HireMe />
    </footer>
  
  )
}

export default Footer