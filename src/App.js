import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0, 0, 20)";
      showAlert("Dark mode is enabled succesfully.", "Success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled succesfully.", "Success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typemsg: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // partial routing vs full exact matching routing

  return (
    <>
    <BrowserRouter>
        <Navbar title="Textutils" about="About textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm titleText = "TextUtils Application  " mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
