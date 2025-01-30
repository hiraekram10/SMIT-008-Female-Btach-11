import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";


const AppRouter =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter