import { Routes, Route } from "react-router-dom";

import MenuRoles from "./interfaces/MenuRoles";
import LoginUsuario from "./interfaces/LoginUser";
import LoginAdmin from "./interfaces/LoginAdmin";
import Menuusuario from "./interfaces/Menuusuario";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuRoles />} />
      <Route path="/login-usuario" element={<LoginUsuario />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/roles" element={<MenuRoles />} />
      <Route path="/Menuusuario" element={<Menuusuario />} />
    </Routes>
  );
}

export default App;
