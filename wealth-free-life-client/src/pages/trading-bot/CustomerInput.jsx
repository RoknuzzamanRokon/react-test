import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const CustomerInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <main className="min-h-[calc(100dvh-64px)] section-wrapper flex items-center justify-center">
      <div className="p-10 rounded-md shadow-md border space-y-5 w-full sm:w-[80%] max-w-md mx-auto">
        <div className="flex flex-col items-center space-y-1">
          <h4>Trading Bot</h4>
          <p>Enter your binance credentials</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col">
            <label className="font-medium">UserName</label>
            <input
              type="text"
              className="bg-white outline-none border-b border-black"
              defaultValue={user?.displayName}
              disabled
              {...register("userName")}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Email Id</label>
            <input
              type="email"
              className="bg-white outline-none border-b border-black"
              defaultValue={user?.email}
              disabled
              {...register("emailId")}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Customer Id</label>
            <input
              type="text"
              className="bg-white outline-none border-b border-black"
              defaultValue={user?.uid}
              disabled
              {...register("customerId")}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Api Secret</label>
            <input
              type="text"
              className="outline-none border-b border-black"
              {...register("apiSecret", { required: true })}
            />

            {errors.apiSecret && (
              <span className="text-red-500  text-sm">
                Api Secret is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Api Key</label>
            <input
              type="text"
              className="outline-none border-b border-black"
              {...register("apiKey", { required: true })}
            />

            {errors.apiKey && (
              <span className="text-red-500  text-sm">Api Key is required</span>
            )}
          </div>

          <Button type="submit" className="w-full rounded-full">
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CustomerInput;
