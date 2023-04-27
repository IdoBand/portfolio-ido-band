import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: 
                <>
                    <Home />
                    <Footer />
                </>
              
            },
            {
                path: '/Projects',
                element: 
                <>
                    <Projects />
                    <Footer />
                </>
            },
            {
                path: '/About',
                element: 
                <>
                    <About />
                    <Footer />
                </>
            },
        ]
    }
])