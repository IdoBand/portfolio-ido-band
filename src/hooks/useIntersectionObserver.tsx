import { useEffect, useState, useRef } from "react"

const useIntersectionObserver = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [firstIntersection, setFirstIntersection] = useState<boolean>(false)
    const htmlElementRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
            if (entry.isIntersecting && !firstIntersection) {
                setFirstIntersection(true)
            }
        },
        {
            threshold: 0.5
        }
        )
        if (htmlElementRef.current) {
            observer.observe(htmlElementRef.current)
        }
        return () => {
            if (htmlElementRef.current) {
                observer.unobserve(htmlElementRef.current)
            }
        }
    }, [])
  return {
    isVisible,
    firstIntersection,
    htmlElementRef
  }
}

export default useIntersectionObserver