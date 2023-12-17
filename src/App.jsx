import Footer from "./components/footer/Footer"
import NavBar from "./components/navBar/NavBar"
import Contact from "./pages/contact/Contact"
import CustomersTeam from "./pages/customers/CustomersTeam"
import AboutUs from "./pages/aboutUs/AboutUs"
import Services from "./pages/services/Services"


function App() {

  return (
   <>
   <NavBar/>
   <AboutUs/>
   <Services />
   <CustomersTeam/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
