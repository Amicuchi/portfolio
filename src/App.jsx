import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import styles from "./styles/App.module.scss";

const App = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
