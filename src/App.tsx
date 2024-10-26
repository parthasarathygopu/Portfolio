import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;