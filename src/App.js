import "./App.css";
import About from "./components/About";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import Message from "./components/Message";
import Nav from "./components/Nav";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSec />
      <Nav />
      <Slider />
      <Announcement />
      <Message />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
