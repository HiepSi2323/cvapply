import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Testimonial from './components/testimonial/testimonial';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
