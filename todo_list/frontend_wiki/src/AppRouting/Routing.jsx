import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../containers/Login";
import Temporal from "../containers/Temporal";

function Routing() {
    return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Temporal/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Routing