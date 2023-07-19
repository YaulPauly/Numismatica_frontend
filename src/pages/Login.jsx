import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-6xl font-extralight text-center capitalize mb-5">
        Numismática perú
      </h1>
      <h2 className="text-5xs font-extralight  text-center uppercase text-slate-800">
        Inicia sesión y pública <br />
        los anuncios que desees
      </h2>

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
          <input
            type="checkbox"
            className="mr-2 leading-tight align-middle"
            id="rememberMe"
          />
          <label
            className="capitalize text-xs font-extralight cursor-pointer hover:font-light"
            htmlFor="rememberMe"
          >
            Recordar Contraseña
          </label>
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className=" w-full mb-5 py-3 border capitalize font-extralight rounded bg-emerald-300
          hover:cursor-pointer hover:bg-emerald-400 transition-colors hover:font-normal"
        />
      </form>

      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 uppercase text-sm"
          to="/registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>

        <Link
          className="block text-center my-5 uppercase text-sm"
          to="/olvide-password"
        >
          Olvide Mi Password
        </Link>
      </nav>
    </>
  );
};

export default Login;
