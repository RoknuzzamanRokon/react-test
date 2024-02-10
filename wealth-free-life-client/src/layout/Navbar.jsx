import { Button } from "@/components/ui/button";
import useToast from "@/hooks/useToast";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { showToast } = useToast();

  const handleLogout = () => {
    logOut()
      .then(() => {
        showToast("Logout Successful!");
      })
      .catch((err) => {
        showToast(err.message);
      });
  };

  return (
    <nav className="section-wrapper py-3 flex items-center justify-between">
      <div>
        <h4>Wealth Free Life</h4>
      </div>

      <div className="flex items-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/">Trading Bot</Link>
        <Link to="/">Market</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">Contact Us</Link>
        {user && (
          <Button onClick={handleLogout} variant="link" size="link">
            Signout
          </Button>
        )}
      </div>

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
