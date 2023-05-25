import { useState } from 'react';
import './App.css';
import GenerateURL from './components/Content/GenerateURL';
import NavbarContent from './components/Content/NavbarContent';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification';

function App() {
  const [theme,settheme]=useState('light');
  const SelectedTheme=()=>{
    if(theme==='light'){
      settheme('dark');
    }
    else{
      settheme('light');
    }
    return theme;
  }
  return (
    <div className="App">
      <Notification/>
      <Navbar mode={SelectedTheme}/>
      <NavbarContent/>
      {/* <GenerateURL/> */}
    </div>
  );
}

export default App;
