import "./App.css";
import Footer from "./components/General/Footer";
import Header from "./components/General/Header";
import Features from "./components/Home/Features";
import Hero from "./components/Home/Hero";
import Programs from "./components/Home/Programs";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;
