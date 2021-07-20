import Banner from "../components/Banner";
import About from "../components/About";
import Values from "../components/Values";
import Service from "../components/Service";
import Slider from "../components/Slider";
import Partner from "../components/Partner";
import Client from "../components/Client";
import Blog from "../components/Blog";
import Latest from "../components/Latest";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade';



export default function Home() {
  return (
    <div  className="mx-auto">
      <title>Newgen Intelligence</title>
      <Banner source="https://i.ibb.co/5WR8Nnm/3-D-earth-graphic-symbolizing-global-trade-vector-illustration.jpg" text="NEW VISION  NEW FUTURE" font={"text-6xl"} size="cover" color={"text-white"}  />

     
        <About />
      <Fade top duration={2000}>
             <Values />
      </Fade>
      
        <Service />
        <Slider />
        <Partner />
        <Client />
        <Blog />

        <Latest />
     
     

      <Footer/>

     
    </div>
  )
}
