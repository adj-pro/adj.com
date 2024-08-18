
import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import Partners from "../../components/Partners";
import Services from "../../components/Services";


export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <AboutUs />
      <Newsletter />
      <Partners />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  )
}
