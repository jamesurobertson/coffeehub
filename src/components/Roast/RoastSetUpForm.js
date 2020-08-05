import React, { useContext } from "react";
import styled from "styled-components";
import { client, ErrorMessage } from "../../utils/index";
import { useForm } from "react-hook-form";
import Input from "../../styles/Input";
import { RoastContext } from "../../context/RoastContext";

const RoastFormWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bg};

  form {
    display: flex;
    flex-flow: column;
  }

  .formField {
    display: flex;
    flex-flow: column;
    width: 25%;
    min-width: 250px;
    padding: 5px 0;
    height: 90px;
  }
  textarea:focus,
  input:focus,
  input[type]:focus,
  .uneditable-input:focus {
    border: 2px solid #2684ff;
    border-radius: 5px;
    outline: 0 none;
  }

  button {
    width: 25%;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    min-width: 250px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    background-color: ${(props) => props.theme.blue};
  }

  label {
    font-size: 18px;
    padding-bottom: 5px;
  }

  select {
    padding: 8px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    background-color: white;
  }

  p {
    color: ${(props) => props.theme.red};
    bottom: -20px;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  @media screen and (max-width: 830px) {
    width: 90%;
  }
`;

const RoastSetUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { setRoastData, roastData } = useContext(RoastContext);

  const startRoast = (body) => {
    client(`/roasts/${roastData.id}`, { body, method: "PUT" });
    setRoastData({ ...roastData, ...body });
  };

  return (
    <RoastFormWrapper>
      <h1> Coffee Details </h1>
      <form onSubmit={handleSubmit(startRoast)}>
        <div className="formField">
          <label>Supplier: </label>
          <Input
            name="supplier"
            autoComplete={"off"}
            placeholder="Ex. Sweet Marias"
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.supplier} />
        </div>
        <div className="formField">
          <label>Origin:</label>
          <select name="origin" ref={register({ required: true })}>
            <option value="">Please choose a bean</option>
            <option value="1">Brazil</option>
            <option value="2">Burundi</option>
            <option value="3">Colombia</option>
            <option value="4">Congo</option>
            <option value="5">Costa Rica</option>
            <option value="6">El Salvador</option>
            <option value="7">Ethiopia</option>
            <option value="8">Flores</option>
            <option value="9">Guatemala</option>
            <option value="10">Java</option>
            <option value="11">Papa New Guinea</option>
            <option value="12">Peru</option>
            <option value="13">Rwanda</option>
            <option value="14">Sulawesi</option>
            <option value="15">Sumatra</option>
            <option value="16">Timor</option>
            <option value="17">Yemen</option>
          </select>
          <ErrorMessage error={errors.origin} />
        </div>
        <div className="formField">
          <label>Bean: </label>
          <Input
            name="bean"
            autoComplete={"off"}
            placeholder="Ex. Agaro Kenisa"
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.bean} />
        </div>
        <div className="formField">
          <label>Load:</label>
          <Input
            placeholder="In Grams"
            type="number"
            autoComplete={"off"}
            name="load"
            min='0'
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.load} />
        </div>
        <div className="formField">
          <label>Ambient Temperature: </label>
          <Input
            type="number"
            placeholder="In Fahrenheit"
            autoComplete={"off"}
            name="ambientTemp"
            min='0'
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.ambientTemp} />
        </div>
        <button type="submit">Start Roast</button>
      </form>
    </RoastFormWrapper>
  );
};

export default RoastSetUpForm;
