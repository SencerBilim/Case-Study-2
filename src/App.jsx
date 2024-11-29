import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhoAreWe from "./components/WhoAreWe"
import PropertySlider from "./components/PropertySlider"
import BlogSlider from "./components/BlogSlider"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  
  return (
    <main className="flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <WhoAreWe></WhoAreWe>
      <PropertySlider></PropertySlider>
      <BlogSlider></BlogSlider>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </main>
    
  )
}

export default App
