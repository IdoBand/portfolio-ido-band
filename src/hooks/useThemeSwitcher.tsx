import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const initial = window.localStorage.getItem('themeIdo') === 'dark' ? 'dark' : 'light'
    const [mode, setMode] = useState<string>(initial)
    
    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem('themeIdo')

        const handleChange = () => {
            let check: string;
            if (userPref) {
                check = userPref === 'dark' ? 'dark' : 'light'
                if (check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            } else {
                check = mediaQuery.matches ? 'dark' : 'light'
                if (check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
            setMode(check)
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)

    }, [])

    useEffect(() => {
        if (mode === 'dark') {
            window.localStorage.setItem('themeIdo', 'dark')
            document.documentElement.classList.add('dark')
        } else if (mode === 'light'){
            window.localStorage.setItem('themeIdo', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [mode])
  return {mode, setMode}
}

export default useThemeSwitcher