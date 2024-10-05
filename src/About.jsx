import { useState } from 'react';
import Home from './Home';
import './Login.css';
import NavbarPage from './NavbarPage';

function About() {
  const [text, setText] = useState([]);
  const [newText, setNewText] = useState('');

  const addText = () => {
    if (newText) {
      setText([...text, newText]);
      setNewText('');
    }
  };
  return (
    <>
      {/* <NavbarPage /> */}
      {/* <div>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button onClick={addText}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none' }}>
        {text.map((t) => (
          <li>{t}</li>
        ))}
      </ul> */}
      <div
        className="d-flex justify-content-center m-auto mt-5"
        style={{ width: '62%' }}
      >
        <img src="https://react-landing-page-template-93ne.vercel.app/img/about.jpg" />
        <div className="d-flex flex-column align-items-start ms-5">
          <h2 className="fw-bold">ABOUT US</h2>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <h4>Why Choose Us?</h4>
          <ul className="d-flex" style={{ listStyleType: 'disclosure-closed' }}>
            <div className="me-5">
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </div>
            <div className="ms-5">
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
export default About;
