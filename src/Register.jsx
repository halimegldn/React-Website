import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavbarPage from './NavbarPage';
import Button from 'react-bootstrap/Button';
function Register() {
  const [email, setMail] = useState('');
  const [password, setpass] = useState('');
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      alert('Kayıt başarısız: ' + error.message);
      // navigate('/home');
    }
  };
  return (
    <div className="d-flex register" style={{ height: '100vh' }}>
      <NavbarPage />
      <div
        className="my-auto container w-25"
        style={{
          padding: '8rem 5rem',
          boxShadow: '0 0 36px 1px rgba(0, 0, 0, 0.2)',
          marginTop: '10rem',
        }}
      >
        <div className="d-flex flex-column align-items-center m-auto">
          <div className="mb-3 fs-5 inputs">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="mb-3 fs-5 inputs">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          {/* <button
            onClick={handleRegister}
            className="bg-secondary text-white rounded-5"
          >
            Register
          </button> */}
          <Button
            onClick={handleRegister}
            variant="secondary"
            className="rounded-5"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Register;
