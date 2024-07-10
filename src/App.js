import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <div className="App">
      <NavBar />
      <Header />
   
      <Projects />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
