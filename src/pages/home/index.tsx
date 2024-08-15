
import AboutUs from "../../components/AboutUs";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import Partners from "../../components/Partners";


export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <AboutUs />
      <Newsletter />
      <Partners />
    </main>
  )
}
