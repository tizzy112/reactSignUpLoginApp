import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

// Styled component
const Wrapper = styled.div``;

const Auth = () => {
  // Change 'auth' to 'Auth' to follow React naming conventions
  return (
    <Wrapper>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </div>
    </Wrapper>
  );
};

export default Auth;
