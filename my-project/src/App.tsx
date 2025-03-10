import About from "./pages/About";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-950">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-primary"></div>
        </div>
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Team></Team>
        <Services></Services>
        <Booking></Booking>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
