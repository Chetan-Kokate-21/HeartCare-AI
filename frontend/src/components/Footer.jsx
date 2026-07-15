import { Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <Heart className="text-red-500" size={28} />

              <h2 className="text-2xl font-bold">
                HeartCare AI
              </h2>

            </div>

            <p className="text-slate-400 mt-5 leading-8">

              AI-powered heart disease prediction platform that leverages Machine Learning, React, Flask, and Python to deliver fast, reliable, and user-friendly heart risk analysis.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Prediction
              </li>

              <li className="hover:text-white transition cursor-pointer">
                About
              </li>

            </ul>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Technologies
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>React</li>

              <li>Flask</li>

              <li>Python</li>

              <li>Scikit-learn</li>

              <li>Tailwind CSS</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Chetan-Kokate-21"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/chetan-kokate-39a565285/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:chetankokate2004@gmail.com"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <Mail size={24} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 text-center text-slate-400">

        <p>

            © 2026 HeartCare AI

            <span className="text-cyan-400">
            Developed by Chetan Kokate
            </span>

        </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;