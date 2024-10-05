import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Login.css';
import { useState } from 'react';
import NavbarPage from './NavbarPage';
import Features from './Features';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26MP9f5YdlTfN-2pikGFAXSyfPfT7l-wdhA&s',
  'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
];

function Home() {
  const [count, setCount] = useState(0);

  const nextCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const prevCount = () => {
    if (count < images.length) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <NavbarPage />

      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Contact />
    </>
  );
}
export default Home;
