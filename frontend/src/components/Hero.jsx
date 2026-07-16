import { ArrowRight, HeartPulse, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen flex items-center pt-16 pb-16 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-blue-300/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-300/30 rounded-full blur-3xl"></div>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl text-blue-700 px-6 py-3 rounded-full shadow-xl border border-blue-100 hover:scale-105 transition-all duration-300 mb-8">
            <HeartPulse size={18} />
            <span className="font-medium">
              AI Powered Heart Disease Prediction
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 tracking-tight">

            AI-Powered

            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Heart Disease
            </span>

            <span className="block mt-2">
                Prediction System
            </span>

          </h1>

          <p className="mt-8 text-[22px] leading-10 text-slate-600 max-w-3xl">

              Get an instant AI-powered assessment of your heart disease risk using
              a trained Machine Learning model. Receive a confidence score,
              personalized health insights, and actionable recommendations within
              seconds.

          </p>

          <div className="flex gap-5 mt-10 items-center">

            <button
              onClick={() => navigate("/predict")}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white px-9 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-xl hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300"
            >
              Start Prediction
              <ArrowRight size={18} />
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-9 py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1">
              Learn More
            </button>

          </div>

          <p className="mt-8 text-sm text-slate-500 flex items-center gap-2">

            ✅ Trusted Machine Learning Model

            <span className="text-slate-300">|</span>

            🔒 Secure & Private

            <span className="text-slate-300">|</span>

            ⚡ Instant Analysis

        </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14 max-w-xl">

    <div className="bg-white rounded-2xl py-6 px-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">
            96%
        </h2>
        <p className="text-slate-500 text-sm">
            Prediction Accuracy
        </p>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
        <h2 className="text-3xl font-bold text-green-600">
            &lt;2s
        </h2>
        <p className="text-slate-500 text-sm">
            Analysis Time
        </p>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
        <h2 className="text-3xl font-bold text-indigo-600">
            AI
        </h2>
        <p className="text-slate-500 text-sm">
            Machine Learning Model
        </p>
    </div>

</div>

        </div>

        {/* Right Side */}

{/* Right Side */}

<div className="flex justify-center relative">

    <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-[36px] shadow-2xl border border-white/40 p-8 hover:-translate-y-3 hover:rotate-1 transition-all duration-500">

        <div className="flex items-center justify-between">

            <div>

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-md">
                      <Activity
                        size={30}
                        className="text-white"
                        />
                  </div>

                  <div>

                      <h3 className="text-2xl font-bold text-slate-800">
                          HeartCare AI
                      </h3>

                      <p className="text-slate-500 text-sm">
                          AI Analysis Preview
                      </p>

                  </div>

              </div>

            </div>

            <div className="bg-green-100 animate-pulse text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                LIVE
            </div>

        </div>

        <div className="mt-8 space-y-6">

            {/* Health Score */}

            <div>

                <div className="flex justify-between mb-2">

                    <span className="text-slate-500">
                        Heart Health Score
                    </span>

                    <span className="font-bold text-blue-600">
                        92 / 100
                    </span>

                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">

                    <div className="w-[92%] bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full shadow-lg"></div>

                </div>

            </div>

            {/* Confidence */}

            <div>

                <div className="flex justify-between mb-2">

                    <span className="text-slate-500">
                        Model Confidence
                    </span>

                    <span className="font-bold text-green-600">
                        96%
                    </span>

                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">

                    <div className="w-[96%] bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full shadow-lg"></div>

                </div>

            </div>

            {/* Prediction */}

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">

                <p className="text-sm text-slate-500">
                    Prediction
                </p>

                <h2 className="text-3xl font-bold text-green-600 mt-2">
                    🟢 Low Risk
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                    Based on AI-powered analysis
                </p>

            </div>

        </div>

    </div>

</div>

      </div>
    </section>
  );
}

export default Hero;