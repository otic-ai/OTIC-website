
import Believe from "./Believe";
import Footer from "./Footer";
import Mission from "./Mission";
import "./Otic.css";
import Service from "./Service";
import Team from "./Team";
import Hero from "./hero";
import CaseStudies from "./CaseStudies";
import News from "./News";
import Newsletter from "./Newsletter";
import Navbar from "./Header";


const Otic = () => {
  return (
    <div className="otic">
      <Navbar />
    <Hero />   
  <Mission />
  <Service />
   <Believe />  
   
   <News />
    <Team /> 
   
    <Newsletter />
    <Footer />
   
    
    </div>
  );
};

export default Otic;
