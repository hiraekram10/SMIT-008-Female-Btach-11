

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import AppRouter from "./appRoute";
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar1 from "./components/Navbar";


function App() {
  return (
    <>
    <Router>
  <Navbar1/> 
<AppRouter/>
</Router>
     
    </>
  );
}

export default App;
