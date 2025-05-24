import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="font-sans">
        <LandingPage />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
