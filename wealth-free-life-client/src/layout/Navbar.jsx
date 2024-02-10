import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import useToast from "@/hooks/useToast";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { showToast } = useToast();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        showToast("Logout Successful!");
      })
      .catch((err) => {
        showToast(err.message);
      });
  };

  const navItems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/trading-bot">Trading Bot</Link>
      <Link to="/market">Market</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact Us</Link>
      {user && (
        <Button onClick={handleLogout} variant="link" size="link">
          Signout
        </Button>
      )}
    </>
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <nav className="section-wrapper py-3 flex items-center justify-between">
      {/* left side */}
      <div className="flex items-center gap-3">
        {/* opening button */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="size-6" />
        </button>

        {/* nav title */}
        <h4>Wealth Free Life</h4>

        {/* mobile navigation overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "fixed top-0 left-0 w-full h-full bg-slate-300 bg-opacity-70 backdrop-blur-sm md:hidden",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        ></div>

        {/* mobile navigation content */}
        <div
          className={cn(
            "absolute top-0 left-0 w-1/2 h-screen md:hidden bg-white px-3 py-10 rounded transition-transform ease-in-out duration-300 z-50",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* closing button */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-end mb-5"
          >
            <button>
              <IoClose className="size-6" />
            </button>
          </div>

          {/* menu items */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex flex-col gap-y-2 items-start"
          >
            {navItems}
          </div>
        </div>
      </div>

      {/* middle  */}
      <div className="xs:hidden lg:flex items-center gap-5">{navItems}</div>

      {/* right side */}
      {user ? (
        <Link to="/wallet">
          <Button className="rounded-full">Wallet</Button>
        </Link>
      ) : (
        <Link to="/signin">
          <Button className="rounded-full">Get Start</Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
