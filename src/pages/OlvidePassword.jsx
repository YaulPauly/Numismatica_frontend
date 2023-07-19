import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-6xl font-extralight text-center capitalize mb-5">
        Reestablece tu contraseña
      </h1>


      <form action="" className="my-10 bg-slate-50 rounded-lg p-10">
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
          />
        </div>
        <input
          type="submit"
          value="Enviar Instrucciones"
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
          to="/registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  )
}

export default OlvidePassword