import React, { useState } from 'react';
import NavbarPage from './NavbarPage';
import { firestore } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Login.css';
import {
  GeoAlt,
  Phone,
  Envelope,
  Facebook,
  Twitter,
  Youtube,
} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const contactsCollection = collection(firestore, 'contacts');
      await addDoc(contactsCollection, {
        name: name,
        email: email,
        message: message,
      });
      alert('Mesajınız başarıyla gönderildi!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      alert('Mesaj gönderimi başarısız: ' + err.message);
    }
  };

  return (
    <div className="bg-light contact text-white">
      {/* <NavbarPage /> */}
      <div
        style={{
          height: '50rem',
          background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%) ',
          alignContent: 'start',
          marginTop: '10rem',
        }}
      >
        <div className="d-flex m-auto w-75 mt-5">
          <div className="w-75 mt-5">
            <h2 className="fw-bold">Get In Touch</h2>
            <form className="d-flex flex-column m-auto w-75">
              <div
                className="d-flex mb-3 contactform"
                style={{ height: '3rem' }}
              >
                <input
                  className="w-50 me-2 "
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type your name..."
                />
                <input
                  className="w-50"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email..."
                />
              </div>
              <textarea
                style={{ height: '10rem', border: 'none' }}
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <Button
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                }}
                type="submit"
                onClick={handleContact}
                className="w-25 mt-3 mb-3 rounded-5 fw-bold"
              >
                SEND
              </Button>
            </form>
          </div>
          <div className="w-25 mt-5">
            <h4>Contact Info</h4>
            <div className="align-items-baseline d-flex justify-content-center ">
              <GeoAlt className="icons" />
              <p className="ms-2 fw-bold">Address</p>
            </div>
            <p>4321 California St, San Francisco, CA 12345</p>
            <div className="align-items-baseline d-flex justify-content-center ">
              <Phone className="icons" />
              <p className="ms-2 fw-bold">Phone</p>
            </div>
            <p>+1 123 456 1234</p>
            <div className="align-items-baseline d-flex justify-content-center ">
              <Envelope className="icons" />
              <p className="ms-2 fw-bold">Email</p>
            </div>
            <p>info@company.com</p>
          </div>
        </div>
        <div className="d-flex justify-content-center fs-3 p-3">
          <div className="border p-1 rounded-3 me-3 socialMediaIcons">
            <Facebook className="m-1 icons" />
          </div>
          <div className="border p-1 rounded-3 me-3 socialMediaIcons">
            <Twitter className="m-1 icons" />
          </div>
          <div className="border p-1 rounded-3 me-3 socialMediaIcons">
            <Youtube className="m-1 icons fs-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
