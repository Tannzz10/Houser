import React from 'react';
import { Testimonals } from "./Components/Testimonials"
import { Header } from "./Components/Header"
import { Navbar } from "./Components/Navbar"
import { About } from "./Components/About"
import { Projects } from "./Components/Projects"
import { Contact } from "./Components/Contact"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fotter } from './Components/Fotter';
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header/>
      <Navbar/>
      <About/>
      <Projects/>
      <Testimonals/>
      <Contact/>
      <Fotter/>
    </div>
  )
}

export default App
