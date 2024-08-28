import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Styled container for the registration form
const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

// Styled form
const RegisterForm = styled.form`
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

// Styled select field
const SelectField = styled.select`
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

// Styled button
const SubmitButton = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notify = (msg) => toast(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://student-app-3baw.onrender.com/api/v1/auth/create",
        {
          firstname: firstname,
          lastname: lastname,
          role: role,
          email: email,
          phone: phone,
          age: age,
          username: username,
          password: password,
        }
      );
      if (res.data.status === "success") {
        notify("Registration successful");
      }
      console.log("res", res);
    } catch (err) {
      notify("registration failed");
      console.log(err);
    }
  };

  const backToLogin = () => {
    navigate("/auth/login");
  };
  return (
    <>
      <RegisterContainer>
        <RegisterForm onSubmit={handleSubmit}>
          <h2>Register</h2>
          <InputField
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => setFirstname(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => setLastname(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <SelectField required onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </SelectField>
          <InputField
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="tel"
            placeholder="Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            type="number"
            placeholder="Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit" onClick={backToLogin}>
            Register
          </SubmitButton>
        </RegisterForm>
      </RegisterContainer>
      <ToastContainer />
    </>
  );
};

export default Register;
