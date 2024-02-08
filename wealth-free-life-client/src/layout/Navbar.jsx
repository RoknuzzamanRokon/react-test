import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="section-wrapper py-3 flex items-center justify-between">
      <div>
        <h4>Wealth Free Life</h4>
      </div>

      <div className="flex items-center gap-5">
        <Link to="/">Services</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
      </div>

      <div>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
