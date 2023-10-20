
import { useContext } from "react";
import { Link } from "react-router-dom";
import { parentContext } from "../DataProvider";

const Login = () => {

    const{googleLogin,user}=useContext(parentContext)

    const googleLoginHandle=()=>{
        googleLogin()
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    console.log(user)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100">
      <h1 className="text-center text-2xl mt-5 font-bold border-b-2">Login</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>
                  New user? go and{" "}
                  <Link to={"/register"}>
                    <span className="text-red-400 font-bold">register</span>
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center">
            <div className="border border-gray-600"></div>
            <span className="bg-white relative -top-3 px-4">or</span>
            <button onClick={googleLoginHandle} className="btn w-full rounded-lg mb-6">Continue with google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
