import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import OlvidePassword from "./pages/OlvidePassword"
import NuevoPassword from "./pages/NuevoPassword"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registrar" element={<SignUp/>}/>
          <Route path="olvide-password" element={<OlvidePassword/>}/>
          <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
          <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>



        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
