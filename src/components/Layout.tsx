import { ReactNode } from "react"
import { flexCenter } from "../_mixin"
interface LayoutProps {
    children: ReactNode
    className?: string
}
const Layout = ({children, className=""}: LayoutProps) => {
    console.log(children);
  return (
    <div className={`${flexCenter} w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout