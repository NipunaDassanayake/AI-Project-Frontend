import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Navigation() {
  return (
    <nav className="flex py-12 justify-between items-center">
      <div>
        <Link to={"/"} className="text-4xl font-medium text-underlay-1">
          HirelyAI
        </Link>
      </div>

      <div className="flex justify-center gap-x-8 items-center">
        <Link to={"/"}>Home</Link>
        <div className="flex justify-center gap-x-8 items-center">
          <Link to={"/profile"}>Profile Page</Link>
        </div>
        <div className="flex gap-x-4 items-center">
          <Link to={"/sign-in"}>Sign In</Link>
        </div>
        <Button asChild className="text-black">
          <Link to={"/sign-up"}>Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
}
export default Navigation;
