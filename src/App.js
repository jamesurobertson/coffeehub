import React, {useContext} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from './Routes'
import Auth from './components/Auth'
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { UserContext } from "./context/UserContext";

function App() {
    const {user} = useContext(UserContext)
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />

      {user ? <Routes /> : <Auth/>}
    </ThemeProvider>
  );
}

export default App
