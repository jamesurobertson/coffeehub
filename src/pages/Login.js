import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { client, ErrorMessage } from "../utils/index";
import { TiCoffee } from "react-icons/ti";
import Input from "../styles/Input";
import Button from "../styles/Button";
import {toast} from 'react-toastify'

const LoginWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 20px;
  }

  form {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    background-color: white;
    display: flex;
    width: 100%;
    max-width: 310px;
    padding: 10px 20px;
    flex-flow: column;
    div {
      display: flex;
      flex-flow: column;
      padding: 10px 0;
      position: relative;
    }

    button {
      background-color: ${(props) => props.theme.green};
    }


    label {
        font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .demologin {
        background-color: ${(props) => props.theme.blue};
        margin-top: 10px;
    }

  }
    .signup-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 5px;
        padding: 8px;
        font-size: 14px;
        width: 100%;
        max-width: 310px;

        button {
            background-color: transparent;
            color: ${(props) => props.theme.blue};
            font-weight: 400;

        }
    }

    .buttons-container {
        margin-top: 5px;
    }

    p {
    color: ${(props) => props.theme.red};
    position: absolute;
    bottom: -10px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

const Login = ({ signup }) => {
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

    const login = async (body) => {

        try {
            const {token, user} = await client('/session/login', {body})

            setTimeout(()=> {
                localStorage.setItem('COFFEEHUB_ACCESS_TOKEN', token)
                setUser(user)
            }, 500)

        } catch (err) {
            toast.error(err.message)
        }

    }
  return (
    <LoginWrapper>
      <TiCoffee size="4rem" />
      <h1> Sign in to CoffeeHub</h1>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <label htmlFor="username">Username or email address</label>
          <Input
            id="username"
            name="usernameEmail"
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.usernameEmail} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.password} />
        </div>
        <div className='buttons-container'>
        <Button type="submit"> Sign in</Button>
        <Button onClick={signup} className='demologin'> Sign in with Demo Account</Button>

        </div>
      </form>
      <div className="signup-container">
          New to CoffeeHub?
        <Button onClick={signup}> Create an Account </Button>
      </div>
    </LoginWrapper>
  );
};

export default Login;
