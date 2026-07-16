import { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Search } from "lucide-react";


function Prediction() {

  const [confidence, setConfidence] = useState(null);
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    chestPain: "",
    restingBP: "",
    cholesterol: "",
    fastingBS: "",
    restingECG: "",
    maxHR: "",
    exerciseAngina: "",
    oldpeak: "",
    stSlope: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Update Form Values

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const getRiskFactors = () => {
  const factors = [];

  if (Number(formData.age) >= 60)
    factors.push("Advanced age (60+ years)");

  if (Number(formData.restingBP) >= 140)
    factors.push("High resting blood pressure");

  if (Number(formData.cholesterol) >= 240)
    factors.push("High cholesterol");

  if (formData.fastingBS === "1")
    factors.push("Elevated fasting blood sugar");

  if (formData.maxHR && Number(formData.maxHR) < 100)
    factors.push("Low maximum heart rate");

  if (formData.exerciseAngina === "Y")
    factors.push("Exercise-induced angina");

  if (Number(formData.oldpeak) >= 2)
    factors.push("Elevated ST depression (Oldpeak)");

  if (formData.restingECG === "LVH")
    factors.push("Abnormal ECG (LVH)");

  if (formData.stSlope === "Down")
    factors.push("Down-sloping ST segment");

  return factors;
};

const getRecommendations = () => {

  const recommendations = [];

  if (Number(formData.restingBP) >= 140)
    recommendations.push("🩸 Monitor your blood pressure regularly and reduce salt intake.");

  if (Number(formData.cholesterol) >= 240)
    recommendations.push("🥗 Follow a low-fat, heart-healthy diet.");

  if (formData.fastingBS === "1")
    recommendations.push("🍎 Monitor your blood sugar and reduce sugar intake.");

  if (formData.exerciseAngina === "Y")
    recommendations.push("🏃 Avoid strenuous exercise until advised by your doctor.");

  if (Number(formData.oldpeak) >= 2)
    recommendations.push("🩺 Schedule a cardiac evaluation.");

  if (Number(formData.age) >= 60)
    recommendations.push("❤️ Have regular heart check-ups.");

  recommendations.push("🚭 Avoid smoking and limit alcohol consumption.");

  recommendations.push("💧 Stay hydrated and maintain a healthy weight.");

  return recommendations;

};

const calculateHealthScore = () => {

  let score = 100;

  if (Number(formData.age) >= 60) score -= 10;

  if (Number(formData.restingBP) >= 140) score -= 15;

  if (Number(formData.cholesterol) >= 240) score -= 15;

  if (formData.fastingBS === "1") score -= 10;

  if (formData.restingECG === "LVH") score -= 10;

  if (Number(formData.maxHR) < 100) score -= 10;

  if (formData.exerciseAngina === "Y") score -= 15;

  if (Number(formData.oldpeak) >= 2) score -= 10;

  if (formData.stSlope === "Down") score -= 5;

  // If AI predicts HIGH RISK, cap the score
  if (prediction === "high") {
    score = Math.min(score, 55);
  }

  // If AI predicts LOW RISK, ensure a healthy score
  if (prediction === "low") {
    score = Math.max(score, 80);
  }

  score = Math.max(0, Math.min(100, score));

  return score;
};

  // Send Data To Flask

  const handlePredict = async () => {

    try {

      setLoading(true);

      setPrediction(null);

      const response = await fetch("https://heartcare-ai-se2v.onrender.com/predict", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      });

      if (!response.ok) {

        throw new Error("Server Error");

      }

      const result = await response.json();

      setConfidence(result.confidence);
      if (result.prediction === 0) {

        setPrediction("low");

      } else {

        setPrediction("high");

      }

    } catch (error) {

      console.error(error);

      alert("Unable to connect to Flask Backend");

    } finally {

      setLoading(false);

    }

  };

return (

<motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{
        duration: 0.45,
        ease: "easeOut",
    }}
    className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20"
>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-slate-900">
            Heart Disease Prediction
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Fill in the details below to predict your heart disease risk.
          </p>

        </div>

        {/* Card */}

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 p-8">

          <div className="flex items-center gap-4 mb-10">

    <div className="bg-blue-100 p-4 rounded-2xl shadow-sm">

        <Stethoscope
            size={30}
            className="text-blue-600"
        />

    </div>

    <div>

        <h2 className="text-3xl font-bold text-slate-800">
            Patient Information
        </h2>

        <p className="text-slate-500 mt-1">
            Enter the patient's health information for AI-powered heart disease prediction.
        </p>

    </div>

</div>

          <div className="grid md:grid-cols-2 gap-6">
                        {/* Age */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Age <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g. 45"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* Gender */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Gender <span className="text-red-500">*</span>
              </label>

              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            {/* Chest Pain Type */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Chest Pain Type <span className="text-red-500">*</span>
              </label>

              <select
                name="chestPain"
                value={formData.chestPain}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              >
                <option value="">Select Chest Pain Type</option>
                <option value="ATA">ATA</option>
                <option value="NAP">NAP</option>
                <option value="TA">TA</option>
                <option value="ASY">ASY</option>
              </select>
            </div>

            {/* Resting Blood Pressure */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Resting Blood Pressure <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                name="restingBP"
                value={formData.restingBP}
                onChange={handleChange}
                placeholder="e.g. 120 mmHg"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* Cholesterol */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Cholesterol <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                name="cholesterol"
                value={formData.cholesterol}
                onChange={handleChange}
                placeholder="e.g. 180 mg/dL"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* Fasting Blood Sugar */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Fasting Blood Sugar <span className="text-red-500">*</span>
              </label>

              <select
                name="fastingBS"
                value={formData.fastingBS}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              >
                <option value="">Select Value</option>
                <option value="0">Less than 120 mg/dL</option>
                <option value="1">Greater than 120 mg/dL</option>
              </select>
            </div>
                        {/* Resting ECG */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Resting ECG <span className="text-red-500">*</span>
              </label>

              <select
                name="restingECG"
                value={formData.restingECG}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              >
                <option value="">Select ECG</option>
                <option value="Normal">Normal</option>
                <option value="ST">ST</option>
                <option value="LVH">LVH</option>
              </select>
            </div>

            {/* Maximum Heart Rate */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Maximum Heart Rate <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                name="maxHR"
                value={formData.maxHR}
                onChange={handleChange}
                placeholder="e.g. 150 bpm"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* Exercise Angina */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Exercise Angina <span className="text-red-500">*</span>
              </label>

              <select
                name="exerciseAngina"
                value={formData.exerciseAngina}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              >
                <option value="">Select Option</option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>

            {/* Oldpeak */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Oldpeak <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                step="0.1"
                name="oldpeak"
                value={formData.oldpeak}
                onChange={handleChange}
                placeholder="e.g. 1.5"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* ST Slope */}

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                ST Slope <span className="text-red-500">*</span>
              </label>

              <select
                name="stSlope"
                value={formData.stSlope}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              >
                <option value="">Select ST Slope</option>
                <option value="Up">Up</option>
                <option value="Flat">Flat</option>
                <option value="Down">Down</option>
              </select>
            </div>

          </div>
                    {/* Analyze Button */}

          <div className="mt-10">

            <button
              type="button"
              onClick={handlePredict}
              disabled={loading}
              className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : ""
              }`}
            >

              {loading ? (
  <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search size={22} />
                  <span>Analyze Heart Risk</span>
                </>
              )}

            </button>

          </div>

          {/* Prediction Result */}

          {prediction && (

            <div
              className={`mt-10 rounded-3xl p-8 border backdrop-blur-xl shadow-2xl transition-all duration-500 ${
                prediction === "low"
                  ? "bg-gradient-to-br from-green-50 via-emerald-50 to-white border-green-200"
                  : "bg-gradient-to-br from-red-50 via-rose-50 to-white border-red-200"
              }`}
            >

              <div className="flex items-center gap-3 mb-5">

                  <div className="bg-blue-100 p-3 rounded-xl">

                      <Stethoscope
                          size={28}
                          className="text-blue-600"
                      />

                  </div>

                  <div>

                      <h3 className="text-2xl font-bold text-slate-800">
                          Prediction Result
                      </h3>

                      <p className="text-slate-500 text-sm">
                          AI-based Heart Disease Analysis
                      </p>

                  </div>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

    {/* Health Score */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 p-6">

                  <p className="text-slate-500 font-medium">
                      ❤️ Heart Health Score
                  </p>

                  <h2 className="text-5xl font-bold text-blue-600 mt-4">
                      {calculateHealthScore()}
                  </h2>

                  <p className="text-slate-500 mt-1">
                      out of 100
                  </p>

                  <p
                      className={`mt-4 font-bold ${
                          calculateHealthScore() >= 80
                              ? "text-green-600"
                              : calculateHealthScore() >= 60
                              ? "text-yellow-500"
                              : calculateHealthScore() >= 40
                              ? "text-orange-500"
                              : "text-red-600"
                      }`}
                  >
                      {calculateHealthScore() >= 80
                          ? "🟢 Excellent"
                          : calculateHealthScore() >= 60
                          ? "🟡 Good"
                          : calculateHealthScore() >= 40
                          ? "🟠 Moderate"
                          : "🔴 Poor"}
                  </p>

              </div>

              {/* Confidence */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 p-6">

                  <p className="text-slate-500 font-medium">
                      🎯 Model Confidence
                  </p>

                  <h2 className="text-5xl font-bold text-indigo-600 mt-4">
                      {confidence}%
                  </h2>

                  <p className="text-slate-500 mt-1">
                      Prediction Confidence
                  </p>

                  <div className="w-full bg-slate-200 rounded-full h-3 mt-5">

                      <div
                          className={`h-3 rounded-full transition-all duration-700 ${
                              prediction === "high"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                          }`}
                          style={{ width: `${confidence}%` }}
                      ></div>

                  </div>

              </div>

          </div>
      
              {prediction === "low" ? (

                <>

                  <div className="flex items-center gap-5 bg-gradient-to-r from-green-50 to-green-100 border border-green-300 rounded-2xl p-6 shadow-sm mb-6">

                    <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">✓</span>
                    </div>

                    <div>

                        <p className="text-4xl font-extrabold text-green-700">
                            LOW RISK
                        </p>

                        <p className="text-green-600 text-sm">
                            Healthy Heart Status
                        </p>

                    </div>

                  </div>

                  <p className="mt-4 text-base text-slate-600 leading-8">
                    Based on the health information provided, the AI model predicts that you are currently at a
                    <span className="font-bold text-green-700"> low risk </span>
                    of heart disease.

                    Continue maintaining a healthy lifestyle, exercise regularly, eat a balanced diet, and schedule routine medical check-ups.
                  </p>

                </>

              ) : (

                <>

                 <div className="inline-flex items-center gap-3 bg-red-100 border border-red-300 rounded-2xl px-6 py-4">

                    <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">!</span>
                    </div>

                    <div>

                        <p className="text-3xl font-bold text-red-700">
                            HIGH RISK
                        </p>

                        <p className="text-red-600 text-sm">
                            Immediate Medical Attention Recommended
                        </p>

                    </div>

                </div>

                  <p className="mt-4 text-base text-slate-600 leading-8">
                  Based on the health information provided, the AI model predicts a
                  <span className="font-bold text-red-700"> high risk </span>
                  of heart disease.

                  It is strongly recommended to consult a qualified healthcare professional as soon as possible for further evaluation and appropriate medical guidance.
                  </p>
                  <div className="mt-6">

                    <h4 className="font-bold text-slate-800 mb-3">
                      Possible Risk Factors
                    </h4>

                    <ul className="space-y-2">

                      {getRiskFactors().map((factor, index) => (

                        <li
                          key={index}
                          className="flex items-center gap-2 text-slate-700"
                        >
                          ⚠️ {factor}
                        </li>

                      ))}

                    </ul>

                  </div>
                  <div className="mt-8">

                    <h4 className="font-bold text-slate-800 mb-3">
                      ❤️ Recommended Actions
                    </h4>

                    <ul className="space-y-2">

                      {getRecommendations().map((item, index) => (

                        <li
                          key={index}
                          className="flex items-start gap-2 text-slate-700"
                        >
                          {item}
                        </li>

                      ))}

                    </ul>

                  </div>

                </>

              )}

            </div>

          )}

        </div>

      </div>

    </motion.div>

  );

}

export default Prediction;


        