import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TradingBot = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tradingData"],
    queryFn: () =>
      axios
        .get(
          "https://zyv0q9hl1g.execute-api.us-east-2.amazonaws.com/config-stage/botOutput?display_id=1"
        )
        .then((res) => res.data),

    refetchInterval: 1000,
  });

  if (isLoading)
    return (
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        <p>An error has occurred: + {error.message}</p>
      </div>
    );

  console.log(data);

  return (
    <main className="section-wrapper">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
        <div className="flex items-center justify-center flex-col text-center shadow-md rounded-md border p-5 space-y-1 truncate">
          <p>Update Price</p>
          <h5>{data?.update_price_result}</h5>
        </div>

        <div className="flex items-center justify-center flex-col text-center shadow-md rounded-md border p-5 space-y-1 truncate">
          <p>Trade Sell Amount</p>
          <h5>{data?.trade_sell_amount}</h5>
        </div>

        <div className="flex items-center justify-center flex-col text-center shadow-md rounded-md border p-5 space-y-1 truncate">
          <p>RSI Value</p>
          <h5>{data?.rsi_value}</h5>
        </div>

        <div className="flex items-center justify-center flex-col text-center shadow-md rounded-md border p-5 space-y-1 truncate">
          <p>Average Price</p>
          <h5>{data?.moving_average_price}</h5>
        </div>

        <div className="flex items-center justify-center flex-col text-center shadow-md rounded-md border p-5 space-y-1 truncate">
          <p>Trade Buy Amount</p>
          <h5>{data?.trade_buy_amount}</h5>
        </div>

        <div className="flex items-center justify-center flex-col text-center shadow-md rounded-md border p-5 space-y-1 truncate">
          <p>Closing Price Result</p>
          <h5>{data?.closing_price_result}</h5>
        </div>
      </div>
    </main>
  );
};

export default TradingBot;