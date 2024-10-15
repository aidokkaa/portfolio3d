import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <>
        <BrowserRouter>
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar></Navbar>
              <Hero/>
            </div>
            <About></About>
            <Tech/>
            <Works/>
            <div className='relative z-0'>
              <Contact/>
              <StarsCanvas/>
            </div>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
