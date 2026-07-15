import { HeartPulse } from "lucide-react";

function About() {
  return (
    <section
    id="about"
    className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-3 bg-red-100 text-red-600 px-5 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <HeartPulse size={18} />
            <span className="font-medium">
              About This Project
            </span>
          </div>

          <h2 className="text-4xl font-bold text-slate-900 mt-6">
            HeartCare AI
          </h2>

          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-8">
              AI-powered heart disease prediction system built using Machine Learning,
              React, Flask, and Scikit-learn for fast and intelligent health risk assessment.
          </p>

        </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

        {/* Card 1 */}

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="text-5xl mb-5">
            ❤️
          </div>

          <h3 className="text-xl font-bold text-slate-800">
            Machine Learning
          </h3>

          <p className="text-slate-500 mt-3 leading-7">
            Uses a trained K-Nearest Neighbors model for heart disease prediction.
          </p>

        </div>

        {/* Card 2 */}

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="text-5xl mb-5">
            ⚡
          </div>

          <h3 className="text-xl font-bold text-slate-800">
            Instant Analysis
          </h3>

          <p className="text-slate-500 mt-3 leading-7">
            Predicts heart disease risk in just a few seconds after entering patient details.
          </p>

        </div>

        {/* Card 3 */}

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="text-5xl mb-5">
            🛡️
          </div>

          <h3 className="text-xl font-bold text-slate-800">
            High Accuracy
          </h3>

          <p className="text-slate-500 mt-3 leading-7">
            Provides reliable predictions with confidence using AI-powered analysis.
          </p>

        </div>

        {/* Card 4 */}

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="text-5xl mb-5">
            💻
          </div>

          <h3 className="text-xl font-bold text-slate-800">
            Modern Tech Stack
          </h3>

          <p className="text-slate-500 mt-3 leading-7">
            Built using React, Flask, Python, Scikit-learn and Tailwind CSS.
          </p>

        </div>

      </div>

      {/* Technology Stack */}

<div className="mt-20 text-center">

    <h3 className="text-3xl font-bold text-slate-800">
        Technology Stack
    </h3>

    <p className="text-slate-500 mt-3">
        Technologies used to build HeartCare AI
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-10">

        <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition">
            React
        </span>

        <span className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition">
            Python
        </span>

        <span className="px-6 py-3 bg-green-100 text-green-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition">
            Flask
        </span>

        <span className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition">
            Scikit-learn
        </span>

        <span className="px-6 py-3 bg-cyan-100 text-cyan-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition">
            Tailwind CSS
        </span>

        <span className="px-6 py-3 bg-pink-100 text-pink-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition">
            Machine Learning
        </span>

    </div>

    {/* Project Statistics */}

<div className="grid md:grid-cols-3 gap-8 mt-16">

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <h2 className="text-5xl font-bold text-blue-600">
            918+
        </h2>

        <p className="mt-3 text-slate-600 font-medium">
            Patient Records
        </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <h2 className="text-5xl font-bold text-green-600">
            96%
        </h2>

        <p className="mt-3 text-slate-600 font-medium">
            Model Accuracy
        </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <h2 className="text-5xl font-bold text-purple-600">
            &lt;2 sec
        </h2>

        <p className="mt-3 text-slate-600 font-medium">
            Prediction Time
        </p>

    </div>

</div>
</div>
      </div>
    </section>
  );
}

export default About;