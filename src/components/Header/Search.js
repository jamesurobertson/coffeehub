import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { client } from "../../utils/index";
import { UserContext } from "../../context/UserContext";

const SearchWrapper = styled.div`

.MuiAutocomplete-root {
    margin-left: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bgDark};

    .Mui-focused {
        background-color: white;

        .MuiAutocomplete-input {
            color: black;
        }
    }

    .MuiAutocomplete-input {
            color: white;
        }


  .MuiInputBase-root {
      color: red;
      height: 100%;
  }

  .MuiFormLabel-root {
      color: white;
  }
}
`

const Search = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const loading = open && options.length === 0;
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    let active = true;

    if (!loading) {
      return;
    }
    (async () => {
      const { roasts_list } = await client("/roasts");
      if (active) {
        setOptions(
          roasts_list.map((roast) => `${user.username}/${roast.name}`)
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const selectRoast = (e, value, reason) => {
      e.preventDefault()
    if (options.includes(value)) {
        history.push(`/r/${value}`);
    } else {
        history.push(`/explore/${value}/roast`)
    }

    setSearchValue('')

  };

  return (
    <SearchWrapper>
      <Autocomplete
        freeSolo
        id="roasts-search"
        style={{ width: 300 }}
        open={open}
        inputValue={searchValue}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={options}
        loading={loading}
        onChange={selectRoast}
        clearOnEscape
        clearOnBlur={true}
        clearText='Clear'
        autoComplete
        size="small"
        renderInput={(params) => (
          <TextField
          placeholder='Search or jump to...'
            variant="outlined"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="primary" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </SearchWrapper>
  );
};

export default Search;
