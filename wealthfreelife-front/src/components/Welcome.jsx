import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Button from "./Button";
import Input from "./Input";
import Loader from "./Loader";
import { shortenAddress } from "../utils/shortenAddress";

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const features = [
    "Reliability",
    "Security",
    "Ethereum",
    "Web 3.0",
    "Low Fees",
    "Blockchain",
  ];

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <section className="section-width flex flex-col md:flex-row justify-between items-center text-white py-10 lg:py-20 gap-10">
      {/* left side */}
      <div className="flex-1">
        {/* first row */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl md:text-5xl text-gradient">
            Send Crypto <br /> across the world
          </h1>
          <p className="font-light text-base">
            Explore the crypto world. <br /> Buy and sell cryptocurrencies
            easily on Wealth Free Life.
          </p>
        </div>

        {/* second row */}
        {!currentAccount && (
          <Button onClick={connectWallet} className="mt-5">
            <AiFillPlayCircle />
            Connect Wallet
          </Button>
        )}

        {/* third row */}
        <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-h-[70px] flex justify-center items-center border-[0.5px] rounded border-gray-50 text-sm font-light"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 flex flex-col justify-end items-end gap-10">
        {/* first row */}
        <div className="flex flex-col justify-between eth-card white-glassmorphism h-40 w-1/2 p-2">
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
        <div className="p-5 w-full md:w-[70%] flex flex-col items-center blue-glassmorphism">
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

          <div className="h-[1px] w-full bg-gray-50 my-2" />

          {isLoading ? (
            <Loader />
          ) : (
            <Button colors="transparent" size="full" onClick={handleSubmit}>
              Send now
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
