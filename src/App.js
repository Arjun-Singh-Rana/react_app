
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import {
//   BrowserRouter,
//   Routes,
//   Route
//   // useRouteMatch,
// } from "react-router-dom"

function App() {

  const [mode, setMode] = useState('light');
  const [ alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    }) 
    setTimeout( () => {
      setAlert(null);
    },1500)
  }

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#253283';
      showAlert("dark mode has been enabled", 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode has been enabled", 'success');
    }
  }
  return (
    <>
           
        {/* <BrowserRouter> */}
        <Navbar mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/> 
            {/* <Routes> */}
              <TextForm mode={mode} showAlert={showAlert}/>
              {/* <Route path="/About" element={<About />}/> */}
            {/* </Routes> */}
        {/* </BrowserRouter>   */}
    </>
  );
}

export default App;
