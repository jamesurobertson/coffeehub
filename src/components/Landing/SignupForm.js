import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import { client, ErrorMessage } from "../../utils/index";

const FormWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  width: 100%;
  max-width: 430px;
  margin: 0 24px;
  background-color: white;

  form {
    display: flex;
    flex-flow: column;

    div {
      display: flex;
      flex-flow: column;
      padding: 10px 0;
      position: relative;
    }

    button {
      padding: 22px 8px;
      background-color: ${(props) => props.theme.green};
    }

    input {
      padding: 12px 8px;
    }

    label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .password-help {
      font-size: 12px;
      color: ${(props) => props.theme.secondaryColor};
      margin-top: 0px;
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
  }
`;

const SignupForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const signup = (body) => {
    console.log(body);
  };

  const validateUser = () => {};

  const validateEmail = () => {};

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(signup)}>
        <div>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            name="username"
            ref={register({ required: true, validate: validateUser })}
          />
          <ErrorMessage error={errors.username} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            ref={register({
              required: true,
              validate: validateEmail,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          <ErrorMessage error={errors.email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
          <ErrorMessage error={errors.password} />
        </div>
        <div className="password-help">
          {" "}
          Make sure your password is atleast 8 characters and includes atleast
          one number and one letter.{" "}
        </div>
        <Button type="submit"> Sign up for CoffeeHub</Button>
      </form>
    </FormWrapper>
  );
};

export default SignupForm;
