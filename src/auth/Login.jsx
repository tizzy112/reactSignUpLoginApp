import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// Styled container for the login form
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Styled form
const LoginForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

// Styled input fields
const InputField = styled.input`
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

// Styled buttons
const SubmitButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (msg) => toast(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://student-app-3baw.onrender.com/api/v1/auth/login/student",
        {
          email: email,
          password: password,
        }
      );
      if (res.data.status === "success") {
        notify("Login successful");
      }
      console.log("res", res);
    } catch (error) {
      notify("Login failed");
      console.log(error);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          {/* Login form with email and password fields */}
          <h2>Login</h2>
          <InputField
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Login</SubmitButton>
          {/* Sign Up button */}
          <SignUpButton onClick={() => navigate("/auth/register")}>
            Sign Up
          </SignUpButton>
        </LoginForm>
      </LoginContainer>
      <ToastContainer />
    </>
  );
};

export default Login;
