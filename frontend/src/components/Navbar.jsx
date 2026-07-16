import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:rotate-12 transition duration-300">

            <Heart
              size={22}
              className="text-white fill-white"
            />

          </div>

          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              HeartCare AI
            </h1>

            <p className="text-xs text-slate-500 -mt-1">
              AI Health Assistant
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-cyan-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/predict"
              className="hover:text-cyan-500 transition duration-300"
            >
              Predict
            </Link>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-500 transition duration-300"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-500 transition duration-300"
            >
              About
            </a>
          </li>

        </ul>

        {/* Button */}
        <Link
          to="/predict"
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-cyan-300/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          Get Started

          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition"
          />
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;