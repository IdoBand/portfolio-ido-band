import Layout from "./Layout"
import { Link } from "react-router-dom"
import HireMe from "./HireMe"
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-mont text-lg">
      <Layout className="flex py-8 items-center justify-between font-medium">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link to=''>Say Hello</Link>
      </Layout>
      <HireMe />
    </footer>
  
  )
}

export default Footer