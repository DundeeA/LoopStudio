import Hero from "./components/hero/Hero"
import SubHero from "./components/subhero/SubHero"
import Creations from "./components/creations/Creations"
import Footer from "./components/footer/Footer"
function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <SubHero />
        <Creations />
        <Footer />
      </main>
    </>
  )
}

export default App
