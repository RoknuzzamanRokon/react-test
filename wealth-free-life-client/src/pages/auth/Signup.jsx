import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import useToast from "@/hooks/useToast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { showToast } = useToast();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { userName, email, password } = data;

    createUser(email, password)
      .then(() => {
        updateUserProfile(userName);
        navigate(from, { replace: true });
        showToast("Signup successful!");
        reset();
      })
      .catch((err) => {
        showToast(err.message);
        console.error(err);
      });
  };

  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="p-10 rounded-md shadow-md border space-y-5  w-[80%] max-w-md mx-auto">
        <div className="flex flex-col items-center space-y-1">
          <h3>Signup</h3>
          <p>Enter your personal info</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <input
              type="name"
              className="outline-none border-b border-black"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">User Name</label>
            <input
              type="name"
              className="outline-none border-b border-black"
              {...register("userName", { required: true })}
            />

            {errors.name && (
              <span className="text-red-500  text-sm">
                User Name is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="outline-none border-b border-black"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <span className="text-red-500  text-sm">Email is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
              type="password"
              className="outline-none border-b border-black"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>

          <Button type="submit" className="w-full rounded-full">
            Signup
          </Button>
        </form>

        <p>
          Already have an account?{" "}
          <Link
            className="text-blue-500 hover:underline underline-offset-4"
            to="/signin"
          >
            Signin
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
