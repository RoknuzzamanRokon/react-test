import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Button from "./Button";

const Navbar = () => {
  const { currentAccount, disconnectWallet } = useContext(TransactionContext);
  return (
    <nav className="section-width flex items-center justify-between py-5 text-white">
      {/* left side */}
      <div className="flex-1">
        <h1 className="font-bold text-lg">Wealth Free Life</h1>
      </div>

      {/* right side */}
      <div className="flex-1 flex items-center justify-end">
        <ul className="flex items-center space-x-5">
          <li className="cursor-pointer hover:text-gray-300">Market</li>
          <li className="cursor-pointer hover:text-gray-300">Exchange</li>
          <li className="cursor-pointer hover:text-gray-300">Tutorials</li>
          <li className="cursor-pointer hover:text-gray-300">Wallets</li>

          {/* second row */}
          {currentAccount && (
            <Button size="small" onClick={disconnectWallet}>
              Disonnect Wallet
            </Button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
