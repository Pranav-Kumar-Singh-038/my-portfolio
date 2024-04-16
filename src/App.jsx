import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home/Home"
import { Particle } from "./components/Particle"
import { Projects } from "./components/Projects"
import SkillsComponent from "./components/Skills"
import { About } from "./components/About"

function App() {

  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <SkillsComponent></SkillsComponent>
      <Particle></Particle>
      <Projects></Projects>
    </div>
  )
}

export default App
