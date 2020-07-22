import React, {useContext} from "react";
import styled from "styled-components";
import { client } from "../utils/index";
import useInput from "../hooks/useInput";
import {toast} from 'react-toastify'
import {UserContext} from '../context/UserContext'

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    display: flex;
    flex-flow: column;
  }
`;

const Login = ({ signup }) => {
  const {setUser} = useContext(UserContext)
  const email = useInput("");
  const password = useInput("");

  const login = async (e) => {
    e.preventDefault();

    const body = {email: email.value, password: password.value}
    try {
        const {token, user} = await client('/session/login', {body})
        localStorage.setItem('COFFEEHUB_ACCESS_TOKEN', token)
        setUser(user)
        toast.success("Login successful");

		email.setValue("");
		password.setValue("");
    } catch (err) {
        toast.error(err.message)
    }
  };
  return (
    <SignUpWrapper>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input id="email" value={email.value} onChange={email.onChange} />
        <label htmlFor="password">Password</label>
        <input id="password" type='password' value={password.value} onChange={password.onChange} />
        <button type="submit">Log in</button>
      </form>
    </SignUpWrapper>
  );
};

export default Login;
