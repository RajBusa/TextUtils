// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import Alert from './component/Alert'
// import About from './component/About';
// import {
  // BrowserRouter as Router,
  // Switch,
  // Route
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);  

  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage, 
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = 'rgb(0 49 98)';
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtil - DarkMode';
      // setInterval(() => {
        // document.title = 'TextUtil is Amazing DarkMode';
      // }, 2000);
    }
    else{
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtil - LightMode';
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtil" aboutText="AboutTextutils" mode={Mode} toggleMode={toggleMode} modeText={modeText}/>
      {/* <Navbar title = "TextUtil"/> */}
      {/* <Navbar/> */}
      <Alert alert = {alert}/>
      <div className="container">
      {/* <Switch> */}
        {/* ------> USe exact before path <------
            /user      ---> Component1
            /user/home ---> Component2
            if we not write exact and search /user/home than open /user link */}
        {/* <Route exact path="/"> */}
          <TextForm heading="Enter the Text to analyze below" mode={Mode} showAlert={showAlert}/> 
        {/* </Route> */}

        {/* <Route exact path="/about">
          <About />
        </Route>  */}
      {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
