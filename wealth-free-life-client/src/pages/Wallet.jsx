import { useContext } from "react";
import { TransactionContext } from "@/providers/TransactionProvider";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/utils/shortenAddress";
import Loader from "@/components/Loader";
import Input from "@/components/Input";

const Wallet = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  const features = [
    "Reliability",
    "Security",
    "Ethereum",
    "Web 3.0",
    "Low Fees",
    "Blockchain",
  ];

  return (
    <main className="section-wrapper min-h-[calc(100dvh-64px)] flex flex-col lg:flex-row justify-between items-center py-10 lg:py-0 gap-10">
      {/* left side */}
      <div className="flex-1 w-full">
        {/* first row */}
        <div className="flex flex-col space-y-2 mb-5">
          <h1>
            Send Crypto <br /> across the world
          </h1>
          <p>
            Explore the crypto world. <br /> Buy and sell cryptocurrencies
            easily on Wealth Free Life.
          </p>
        </div>

        {/* second row */}
        {!currentAccount && (
          <Button onClick={connectWallet} className="flex items-center gap-1">
            <AiFillPlayCircle />
            Connect Wallet
          </Button>
        )}

        {/* third row */}
        <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-h-[70px] flex justify-center items-center border rounded "
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 w-full flex flex-col justify-end items-end gap-10">
        {/* first row */}
        <div className="w-[70%] sm:w-1/2 flex flex-col justify-between eth-card white-glassmorphism h-40 p-2">
          {/* first row */}
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={20} color="#fff" />
            </div>
            <BsInfoCircle fontSize={18} color="#fff" />
          </div>

          {/* second row */}
          <div>
            <p className="font-light text-sm">
              {shortenAddress(currentAccount)}
            </p>
            <p className="font-semibold text-lg">Ethereum</p>
          </div>
        </div>

        {/* second row */}
        <div className="w-full sm:w-[70%] p-5 flex flex-col items-center shadow-md rounded-md border space-y-3">
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
          />

          {isLoading ? (
            <Loader />
          ) : (
            <Button onClick={handleSubmit} className="w-full rounded-full">
              Send now
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Wallet;
