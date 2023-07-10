import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Mission from './Components/Mission';
import Services from './Components/Services';
import FutureWorks from './Components/FutureWorks';
import CompanyNews from './Components/CompanyNews';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import FadeTransition from './Components/fade';
import PercentageCounter from './Components/increase';
import Data from './Components/data';
import Navbar from './Components/navbar';

function App() {
  return (
    <div >

      <Navbar  />

      <Welcome />
      <Data />
      <FadeTransition>
      <Mission  />
      </FadeTransition>
      <Services  />
      <FutureWorks />
      <CompanyNews />
      <Newsletter  />
      <Footer />
     

    </div>
  );
}

export default App;
