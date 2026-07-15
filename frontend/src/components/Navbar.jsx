import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
            to="/"
            className="flex items-center gap-2"
        >
            <Heart size={30}/>
            <h1 className="text-2xl font-bold text-cyan-500">
                HeartCare AI
            </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-700">
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link to="/predict">Predict</Link>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Contact
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <a href="/#about">About</a>
          </li>
        </ul>

        {/* Button */}
        <Link
            to="/predict"
            className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition"
        >
            Get Started
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;