import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta";
import axios from "axios";

const Signup = () => {
  const [ nombres, setNombres ] = useState("");
  const [ apellidos, setApellidos ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmarPassword, setConfirmarPassword ] = useState("");
  const [ celular, setCelular ] = useState("");
  const [ aceptTermsUse, setAceptTermsUse ] = useState(false);
  const [ alerta, setAlerta ] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    if([nombres, apellidos, email, password, confirmarPassword, celular].includes(''))
      {
        setAlerta({
          msg: "Todos los campos son obligatorios",
          error: true
        })
        return
      }
    if(password !== confirmarPassword)
      {
        setAlerta({
          msg: "Las contraseñas no son iguales",
          error: true
        })
        return
      }
    if(!aceptTermsUse)
      {
        setAlerta({
          msg: "Acepta los Terminos y Politica Privacidad",
          error: true
        })
        return
      }
    if(password.length < 6)
      {
        setAlerta({
          msg: "La contraseña minima es de 6 caracteres",
          error: true
        })
        return
      }

    setAlerta({})

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, 
      {nombres, apellidos, password, email, celular})
      setAlerta({
        msg: data.msg, 
        error: false
      })
      setNombres("");
      setApellidos("");
      setEmail("");
      setPassword("");
      setConfirmarPassword("");
      setCelular("");
      setAceptTermsUse(false);

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg, 
        error: true
      })
    }
  }

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-6xl font-extralight text-center capitalize mb-5">
        Numismática perú
      </h1>
      <h2 className="text-5xs font-extralight  text-center uppercase text-slate-800">
        Registrate y Empieza <br />
        anunciar gratuitamente
      </h2>

      {msg && <Alerta alerta={alerta} />} 

      <form 
        className="my-10 bg-slate-50 rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="capitalize text-xs block font-medium"
            htmlFor="first-name"
          >
            Nombres:
          </label>
          <input
            id="first-name"
            type="text"
            className="w-full mt-1 p-3 border rounded"
            value={nombres}
            onChange={e => setNombres(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-xs block font-medium"
            htmlFor="last-name"
          >
            Apellidos:
          </label>
          <input
            id="last-name"
            type="text"
            className="w-full mt-1 p-3 border rounded"
            value={apellidos}
            onChange={e => setApellidos(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-xs block font-medium"
            htmlFor="email"
          >
            Correo electrónico:
          </label>
          <input
            id="email"
            type="email"
            className="w-full mt-1 p-3 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-xs block font-medium"
            htmlFor="password"
          >
            Contraseña:
          </label>
          <input
            id="password"
            type="password"
            className="w-full mt-1 p-3 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-xs block font-medium"
            htmlFor="confirmar-password"
          >
            Confirmar Contraseña:
          </label>
          <input
            id="confirmar-password"
            type="password"
            className="w-full mt-1 p-3 border rounded"
            value={confirmarPassword}
            onChange={e => setConfirmarPassword(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="capitalize text-xs block font-medium"
            htmlFor="cell-number"
          >
            Celular:
          </label>
          <input
            id="cell-number"
            type="tel"
            className="w-full mt-1 p-3 border rounded"
            maxLength="9"
            value={celular}
            onChange={e => setCelular(e.target.value)}
          />
        </div>
        <div className="my-5">
          <input
            type="checkbox"
            className="mr-2 leading-tight align-middle"
            id="aceptTermsUse"
            value={aceptTermsUse}
            onClick={e => setAceptTermsUse(e.target.value)}
          />
          <label
            className="capitalize text-xs font-extralight cursor-pointer hover:font-light inline-flex mr-5"
            htmlFor="aceptTermsUse"
          >
            Acepto los <nav>Terminos de Uso </nav> &amp; <nav> Politica Privacidad </nav>
          </label>
        </div>
        <input
          type="submit"
          value="Registrate"
          className=" w-full mb-5 py-3 border capitalize font-extralight rounded bg-emerald-300
          hover:cursor-pointer hover:bg-emerald-400 transition-colors hover:font-normal"
        />
      </form>

      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 uppercase text-sm"
          to="/login"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>

        <Link
          className="block text-center my-5 uppercase text-sm"
          to="/olvide-password"
        >
          Olvide Mi Password
        </Link>
      </nav>
    </>
  )
}

export default Signup