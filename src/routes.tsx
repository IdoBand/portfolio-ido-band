import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import About from './pages/About';
import Curtain from './components/Curtain';
import HomeTwo from './pages/HomeTwo';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Curtain />,
    }
])