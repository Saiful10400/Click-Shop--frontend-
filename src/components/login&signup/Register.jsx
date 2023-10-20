import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl mt-5 font-bold border-b-2">Register</h1>
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
                  Have an account? go and{" "}
                  <Link to={"/login"}>
                    <span className="text-red-400 font-bold">login</span>
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
