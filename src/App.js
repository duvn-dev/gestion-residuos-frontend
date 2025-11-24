import { Routes, Route, Navigate } from "react-router-dom";
import Reportes from "./pages/Reportes.jsx";
import VerReporte from "./pages/VerReporte.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/reportes/:id" element={<VerReporte />} />
    </Routes>
  );
}

export default App;