import React, {useState, useContext} from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { client } from "../../utils/index";
import Select from "react-select";
import {RoastContext} from '../../context/RoastContext'

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

  input {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    padding: 8px
  }

  .formField {
      display: flex;
      flex-flow: column;
      width: 25%;
      min-width: 250px;
      padding: 5px 0;
      height: 90px;
  }
  textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {
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

`;

const options = [
  { value: 1, label: "Brazil" },
  { value: 2, label: "Burundi" },
  { value: 3, label: "Columbia" },
  { value: 4, label: "Congo" },
  { value: 5, label: "Costa Rica" },
  { value: 6, label: "El Salvador" },
  { value: 7, label: "Ethiopia" },
  { value: 8, label: "Flores" },
  { value: 9, label: "Guatemala" },
  { value: 10, label: "Java" },
  { value: 11, label: "Papa New Guinea" },
  { value: 12, label: "Peru" },
  { value: 13, label: "Rwanda" },
  { value: 14, label: "Sulawesi" },
  { value: 15, label: "Sumatra" },
  { value: 16, label: "Timor" },
  { value: 17, label: "Yemen" },
];

const RoastSetUpForm = () => {
  const supplier = useInput("");
  const ambientTemp = useInput("");
  const load = useInput("");
  const bean = useInput("");
  const [origin, setOrigin] = useState("");
  const {setRoastData, roastData} = useContext(RoastContext)

  const startRoast = async (e) => {
    console.log(e.target);
    e.preventDefault();
    const body = {
      supplier: supplier.value,
      originId: origin,
      bean: bean.value,
      load: load.value,
      ambientTemp: ambientTemp.value,
    };

    console.log(body)

    const roast = await client(`/roasts/${roastData.id}`, { body, method: "PUT" });
    console.log(roast)
    setRoastData({...roastData, ...body})
  };

  const selectChangeHandler = (selectedOption) => {
      setOrigin(selectedOption.value)
  }
  return (
      <RoastFormWrapper>
      <h1> Coffee Details </h1>
      <form onSubmit={startRoast}>
        <div className="formField">
          <label>Supplier: </label>
          <input
            name="supplier"
            autoComplete={'off'}
            placeholder="Ex. Sweet Marias"
            value={supplier.value}
            onChange={supplier.onChange}
          />
        </div>
        <div className="formField">
          <label>
            Origin:
          </label>
          <Select
          options={options}
          onChange={selectChangeHandler}
          />
        </div>
      <div className="formField">
          <label>Bean: </label>
          <input
            name="Bean"
            autoComplete={'off'}
            placeholder="Ex. Agaro Kenisa"
            value={bean.value}
            onChange={bean.onChange}
          />
        </div>
        <div className="formField">
          <label>Load:</label>
          <input
            placeholder='In Grams'
            type="number"
            autoComplete={'off'}
            name="load"
            value={load.value}
            onChange={load.onChange}
          />
        </div>
        <div className="formField">
          <label>Ambient Temperature: </label>
          <input
            type="number"
            placeholder='In Fahrenheit'
            autoComplete={'off'}
            name="ambientTemp"
            value={ambientTemp.value}
            onChange={ambientTemp.onChange}
          />
        </div>
        <button type="submit">Start Roast</button>
      </form>
    </RoastFormWrapper>
  );
};

export default RoastSetUpForm;
