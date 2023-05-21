
import { Fade } from 'react-awesome-reveal'
import './App.css'
import Footer from './components/footer'
import MenuApp from './components/menuApp'
import Section1 from './components/sections/section1'
import Section2 from './components/sections/section2'
import Section3 from './components/sections/section3'

function App() {

  return (
    <>
      <MenuApp />
      <Fade cascade damping={0.2}>
      <Section1 />
      <Section2 />
      <Section3 />
      </Fade>
      <Footer />
    </>
  )
}

export default App
