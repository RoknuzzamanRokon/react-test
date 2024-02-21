import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DisplayTradingData from "@/components/DisplayTradingData";
import { Button, buttonVariants } from "@/components/ui/button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingSpinner from "@/components/LoadingSpinner";
import { cn } from "@/lib/utils";

const TradingBot = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const {
    data: runningStatusData,
    error: runningStatusError,
    refetch,
  } = useQuery({
    queryKey: ["runningStatus"],
    queryFn: async () =>
      await axios
        .get(
          `https://zyv0q9hl1g.execute-api.us-east-2.amazonaws.com/config-stage/customer/customerItem?customerId=${user?.uid}&attributeToSearch=running_status`
        )
        .then((res) => res.data),
  });

  const {
    isLoading: tradingDataLoading,
    error: tradingDataError,
    data: tradingData,
  } = useQuery({
    queryKey: ["tradingData"],
    queryFn: async () =>
      await axios
        .get(
          `https://zyv0q9hl1g.execute-api.us-east-2.amazonaws.com/config-stage/botOutput?display_id=${user?.uid}`
        )
        .then((res) => res.data),

    refetchInterval: runningStatusData === "ON" ? 1000 : false,
  });

  const startBot = async () => {
    setLoading(true);
    try {
      const data = {
        customerId: user?.uid,
        updateKey: "running_status",
        updateValue: "ON",
      };

      const res = await axios.patch(
        "https://zyv0q9hl1g.execute-api.us-east-2.amazonaws.com/config-stage/customer",
        data
      );
      if (res?.data?.Message === "SUCCESS") {
        refetch();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const stopBot = async () => {
    setLoading(true);
    try {
      const data = {
        customerId: user?.uid,
        updateKey: "running_status",
        updateValue: "OFF",
      };

      const res = await axios.patch(
        "https://zyv0q9hl1g.execute-api.us-east-2.amazonaws.com/config-stage/customer",
        data
      );
      if (res?.data?.Message === "SUCCESS") {
        refetch();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (runningStatusError || tradingDataError) {
    return (
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        <p>
          An error has occurred:{" "}
          {runningStatusError?.message || tradingDataError?.message}
        </p>
      </div>
    );
  }

  return (
    <main className="section-wrapper">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
        {tradingDataLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="shadow-md rounded-md border p-5">
              <Skeleton />
              <Skeleton height={25} />
            </div>
          ))
        ) : (
          <>
            <DisplayTradingData
              title="Update Price"
              value={tradingData?.update_price_result}
            />
            <DisplayTradingData
              title="Trade Sell Amount"
              value={tradingData?.trade_sell_amount}
            />
            <DisplayTradingData
              title="RSI Value"
              value={tradingData?.rsi_value}
            />
            <DisplayTradingData
              title="Average Price"
              value={tradingData?.moving_average_price}
            />
            <DisplayTradingData
              title="Trade Buy Amount"
              value={tradingData?.trade_buy_amount}
            />
            <DisplayTradingData
              title="Closing Price Result"
              value={tradingData?.closing_price_result}
            />
          </>
        )}
      </div>

      <div className="mt-5">
        {runningStatusData === "ON" ? (
          <Button
            onClick={stopBot}
            className={cn(loading && buttonVariants({ variant: "loading" }))}
          >
            {loading ? <LoadingSpinner /> : "Stop Bot"}
          </Button>
        ) : (
          <Button
            onClick={startBot}
            className={cn(loading && buttonVariants({ variant: "loading" }))}
          >
            {loading ? <LoadingSpinner /> : "Start Bot"}
          </Button>
        )}
      </div>
    </main>
  );
};

export default TradingBot;
