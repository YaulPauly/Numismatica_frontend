import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <>
      <h1 className="text-6xl font-extralight text-center capitalize mb-5">
        Numismática perú
      </h1>
      <h2 className="text-5xs font-extralight  text-center uppercase text-slate-800">
        Registrate y Empieza <br />
        anunciar gratuitamente
      </h2>

      <form action="" className="my-10 bg-slate-50 rounded-lg p-10">
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
          />
        </div>
        <div className="my-5">
          <input
            type="checkbox"
            className="mr-2 leading-tight align-middle"
            id="rememberMe"
          />
          <label
            className="capitalize text-xs font-extralight cursor-pointer hover:font-light inline-flex mr-5"
            htmlFor="rememberMe"
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