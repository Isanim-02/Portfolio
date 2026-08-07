
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Starfield } from './components/Starfield';

function App() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Awards />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem'
      }}>
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
