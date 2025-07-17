import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Todo from "./components/Todo";
import ProtectedRoute from "./components/ProtectedRoute";
export default function App(){
  return(
  <div>
<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/todo" element={<ProtectedRoute><Todo/></ProtectedRoute>}/>
  </Routes>
</BrowserRouter>
</div>
  );
}