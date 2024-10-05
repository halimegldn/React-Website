import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavbarPage from './NavbarPage';
import Button from 'react-bootstrap/Button';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert('Giriş başarısız: ' + error.message);
    }
  };

  return (
    <div className="d-flex login" style={{ height: '100vh' }}>
      <NavbarPage />
      <div
        className="my-auto container w-25"
        style={{
          marginTop: '10rem',
          padding: '8rem 5rem',
          boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 40px 1px',
        }}
      >
        <div className="d-flex flex-column align-items-center m-auto">
          <div className="mb-3  fs-5 inputs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-3 fs-5 inputs">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
            />
          </div>
          <Button
            onClick={handleSignIn}
            variant="secondary"
            className="rounded-5"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
