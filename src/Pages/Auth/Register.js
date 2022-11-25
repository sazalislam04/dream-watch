import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerimg from "../../assets/img/register.png";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hook/useToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb;
  const { createUser, userProfileUpdate, loginWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [createUserToken, setCreateUserToken] = useState("");
  const [token] = useToken(createUserToken);

  const handleRegister = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(data.email, data.password)
          .then((result) => {
            const userInfo = {
              displayName: data.name,
              photoURL: imageData.data.display_url,
              email: data.email,
            };
            userProfileUpdate(userInfo)
              .then(() => {
                savedUser(
                  data.name,
                  data.email,
                  imageData.data.display_url,
                  data.role
                );
                return navigate(from, { replace: true });
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      });
  };

  const handleGoogleLogin = () => {
    const buyerAccount = {
      role: "Buyers",
    };
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setCreateUserToken(user?.email);
        savedUser(
          user.displayName,
          user.email,
          user.photoURL,
          buyerAccount.role
        );
      })
      .catch((error) => console.log(error));
  };

  const savedUser = (name, email, photo, role) => {
    const user = {
      name,
      email,
      photo,
      role,
      status: false,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCreateUserToken(email);
          return navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-10">
      <div className="hero-content flex-col lg:gap-20 container lg:flex-row">
        <div className="">
          <img src={registerimg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: "Name is required" })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 mt-1">{errors.name?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  placeholder="photo"
                  className="file-input w-full file-input-bordered"
                  {...register("image", { required: "Photo is required" })}
                />
                {errors.image && (
                  <p className="text-red-500 mt-1">{errors.image?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Please Select One</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("role")}
                >
                  <option defaultValue="Buyers Account">Buyers</option>
                  <option>Seller</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
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
                Have an account Please?
                <Link to="/login" className="text-primary font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
