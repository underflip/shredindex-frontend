// components/LoginModal.tsx

import React, { useState } from 'react';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CFormInput,
} from '@coreui/react';
import { showLogin } from '../../atoms/showLogin';
import { useRecoilState } from 'recoil';

const LoginModal: React.FC = () => {
  const [visible, setVisible] = useRecoilState(showLogin);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const backendBaseUrl = 'https://your-backend-url.com'; // Replace with your OctoberCMS backend URL

  const handleOAuthSignIn = (provider: string) => {
    // Redirect to backend OAuth endpoint
    window.location.href = `${backendBaseUrl}/api/auth/${provider}`;
  };

  const handleEmailAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    try {
      const endpoint = isSigningUp ? '/api/auth/register' : '/api/auth/login';

      const response = await fetch(`${backendBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any required headers, e.g., CSRF tokens
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include cookies if necessary
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful authentication
        // Store the user data and token as needed
        // Close the modal
        setVisible(false);
        // Redirect or update UI as needed
      } else {
        // Handle errors
        setErrorMessage(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred during authentication');
    }
  };

  return (
    <>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{isSigningUp ? 'Sign Up' : 'Login'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* OAuth Buttons */}
          <CButton
            color="warning"
            className="mb-2 w-100"
            onClick={() => handleOAuthSignIn('google')}
          >
            Continue with Google
          </CButton>
          <CButton
            color="info"
            className="mb-2 w-100"
            onClick={() => handleOAuthSignIn('facebook')}
          >
            Continue with Facebook
          </CButton>
          <CButton
            color="secondary"
            className="mb-4 w-100"
            onClick={() => handleOAuthSignIn('facebook')}
          >
            Continue with X
          </CButton>

          {/* Display error messages */}
          {errorMessage && <div style={{ color: 'red', marginBottom: '1rem' }}>{errorMessage}</div>}

          {/* Email Authentication Form */}
          <CForm onSubmit={handleEmailAuth}>
            {isSigningUp && (
              <CFormInput
                type="name"
                name="name"
                placeholder="Name"
                className="mb-3"
                required
              />
            )}
            <CFormInput
              type="email"
              name="email"
              placeholder="Email"
              className="mb-3"
              required
            />
            <CFormInput
              type="password"
              name="password"
              placeholder="Password"
              className="mb-3"
              required
            />
            <CButton type="submit" color="success" className="w-100">
              {isSigningUp ? 'Sign Up' : 'Login'}
            </CButton>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="link"
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            {isSigningUp
              ? 'Already have an account? Login'
              : "Don't have an account? Sign Up"}
          </CButton>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default LoginModal;
