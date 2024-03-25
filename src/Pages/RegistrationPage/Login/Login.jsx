import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:grid grid-cols-2 container justify-center items-center mx-auto mt-40">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
          alt=""
        />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type={passShow ? "text" : "password"}
              placeholder="enter your password"
              className="input input-bordered"
            />
            <label className="label">
              <a className="label-text-alt link link-hover">
                <p onClick={() => setPassShow(!passShow)}>
                  <small>
                    {passShow ? <span>Hide Pass</span> : <span>Show Pass</span>}
                  </small>
                </p>
              </a>
            </label>
          </div>
          <div className="form-control mt-1">
            <button className="btn btn-warning">Login</button>
          </div>
        </form>
        <div className="text-center mb-7 px-5">
          <div className="divider"></div>
          <p className="font-semibold">Or Sign In with</p>
          <div className="flex items-center justify-center gap-4 my-2">
            <button>
        <img src="https://i.ibb.co/KjQdbSD/image.png" alt="" className="w-6" />
      </button>
          </div>
          <Link to="/signUp">
            Do not have an account?{" "}
            <span className="text-blue-500 font-bold">SignUp</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
