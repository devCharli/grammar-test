import { Link } from "react-router-dom";
import HomeLogo from "../../assets/home.svg";

export default function Navbar() {
  return (
    <Link to="/" className="flex items-center p-3">
      <img src={HomeLogo} alt="Home logo" />
      <h1 className="text-xl text-lime-700 font-bold">찰영공</h1>
    </Link>
  );
}
