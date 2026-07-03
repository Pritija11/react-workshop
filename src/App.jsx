import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NoteTaker from "./pages/NoteTaker";
import { BrowserRouter, Routes, Route, Link } from
'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/notetaker" element={<NoteTaker />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
