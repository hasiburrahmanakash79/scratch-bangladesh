import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const [passShow, setPassShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="hero container mx-auto min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="md:grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
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
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a className="label-text-alt link link-hover">
                    <p onClick={() => setPassShow(!passShow)}>
                      <small>
                        {passShow ? (
                          <span>Hide Pass</span>
                        ) : (
                          <span>Show Pass</span>
                        )}
                      </small>
                    </p>
                  </a>
                </label>
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirm", {
                    required: "Confirm password field is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                {errors.confirm && <span>{errors.confirm.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="+088"
                  className="input input-bordered"
                />
                {errors.number && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gander</span>
                </label>
                <select
                  {...register("gender", { required: true })}
                  className="input input-bordered"
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Designation</span>
                </label>
                <input
                  {...register("designation", { required: true })}
                  type="text"
                  placeholder="Designation"
                  className="input input-bordered"
                />
                {errors.number && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type of Institute</span>
                </label>
                <select
                  {...register("institute", { required: true })}
                  className="input input-bordered"
                >
                  <option value="govt">Govt.</option>
                  <option value="nonGovt">Non Govt.</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Division</span>
                </label>
                <input
                  {...register("division", { required: true })}
                  type="text"
                  placeholder="Division"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <input
                  {...register("district", { required: true })}
                  type="text"
                  placeholder="District"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upazila</span>
                </label>
                <input
                  {...register("upazila", { required: true })}
                  type="text"
                  placeholder="Upazila"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ZIP Code</span>
                </label>
                <input
                  {...register("zip", { required: true })}
                  type="number"
                  placeholder="ZIP Code"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Institute Name</span>
              </label>
              <input
                {...register("instituteName", { required: true })}
                type="text"
                placeholder="Institute Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Sign Up</button>
            </div>
          </form>
          <div className="px-5 text-center">
            <div className="divider mt-0 "></div>
          </div>
          <div className="text-center mb-7">
            <Link to="/login">
              Have an account?{" "}
              <span className="text-blue-600 font-bold">LogIn</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
