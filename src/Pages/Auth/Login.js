import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import login from "../../assets/img/login.png";
import { AuthContext } from "../../context/AuthProvider";
import useSetTitle from "../../hook/useSetTitle";
import ButtonLoading from "../../Loading/ButtonLoading";

const Login = () => {
  useSetTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "sazal@islam.com",
      password: "123456789",
    },
  });
  const { userEmailLogin, loginWithGoogle, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    userEmailLogin(data.email, data.password)
      .then((result) => {
        toast.success("Login Success");
        setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    const buyerAccount = {
      role: "Buyers",
    };
    loginWithGoogle()
      .then((result) => {
        toast.success("Login Success");
        const user = {
          email: result.user.email,
          name: result.user.displayName,
          photo: result.user.photoURL,
          role: buyerAccount.role,
          status: false,
        };
        setAuthToken(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-10">
      <div className="hero-content flex-col lg:gap-20 container lg:flex-row">
        <div
          className=""
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img src={login} alt="" />
        </div>
        <div
          className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100"
          data-aos="zoom-in"
        >
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Eamil is required" })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-500 mt-1">
                    {errors.password?.message}
                  </p>
                )}
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {loading ? <ButtonLoading /> : "Login"}
                </button>
              </div>
            </form>
            <div className="divider">Login with social accounts</div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <div className="text-center mt-2">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-medium">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
