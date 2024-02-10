import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      </div>

      <Link to="/signin">
        <Button>Get Start</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
