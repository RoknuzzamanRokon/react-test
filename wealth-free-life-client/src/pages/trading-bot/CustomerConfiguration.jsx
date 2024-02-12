import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const CustomerConfiguration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="min-h-[calc(100dvh-64px)] section-wrapper flex items-center justify-center my-10">
      <div className="p-10 rounded-md shadow-md border space-y-5 w-full sm:w-[80%] max-w-md mx-auto">
        <div className="flex flex-col items-center space-y-1">
          <h4>Trade Strategy Setup</h4>
          <p>Configure your trade strategy</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col">
            <label>Symbol</label>
            <select
              className="outline-none border-b border-black"
              {...register("symbol", { required: true })}
            >
              <option></option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
            {errors.symbol && (
              <span className="text-red-500 text-sm">Symbol is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label>USD Size</label>
            <input
              type="number"
              className="outline-none border-b border-black"
              {...register("usd_size", { required: true })}
            />
            {errors.usd_size && (
              <span className="text-red-500 text-sm">USD Size is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Product Id</label>
            <select
              className="outline-none border-b border-black"
              {...register("product_id", { required: true })}
            >
              <option></option>
              <option value="BTC-USD">BTC-USD</option>
              <option value="ETH-USD">ETH-USD</option>
            </select>
            {errors.product_id && (
              <span className="text-red-500 text-sm">
                Product Id is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Max Buy</label>
            <input
              type="number"
              className="outline-none border-b border-black"
              {...register("max_buy", { required: true })}
            />
            {errors.max_buy && (
              <span className="text-red-500 text-sm">Max Buy is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Max Sell</label>
            <input
              type="number"
              className="outline-none border-b border-black"
              {...register("max_sell", { required: true })}
            />
            {errors.max_sell && (
              <span className="text-red-500 text-sm">Max Sell is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Profit Percentage</label>
            <input
              type="number"
              step="0.01"
              className="outline-none border-b border-black"
              {...register("PROFIT_PERCENTAGE", { required: true })}
            />
            {errors.PROFIT_PERCENTAGE && (
              <span className="text-red-500 text-sm">
                Profit Percentage is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label>Loss Percentage</label>
            <input
              type="number"
              step="0.01"
              className="outline-none border-b border-black"
              {...register("LOSS_PERCENTAGE", { required: true })}
            />
            {errors.LOSS_PERCENTAGE && (
              <span className="text-red-500 text-sm">
                Loss Percentage is required
              </span>
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

export default CustomerConfiguration;
