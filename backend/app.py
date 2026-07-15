from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

    # Load ML files

model = joblib.load("KNN_heart.pkl")
scaler = joblib.load("scaler.pkl")
expected_columns = joblib.load("columns.pkl")

@app.route("/predict", methods=["POST"])
def predict():

        data = request.json

        print(data)


        raw_input = {
            "Age": int(data.get("age", 0) or 0),
            "RestingBP": int(data.get("restingBP", 0) or 0),
            "Cholesterol": int(data.get("cholesterol", 0) or 0),
            "FastingBS": int(data.get("fastingBS", 0) or 0),
            "MaxHR": int(data.get("maxHR", 0) or 0),
            "Oldpeak": float(data.get("oldpeak", 0) or 0),

            "Sex_" + data.get("sex", ""): 1,
            "ChestPainType_" + data.get("chestPain", ""): 1,
            "RestingECG_" + data.get("restingECG", ""): 1,
            "ExerciseAngina_" + data.get("exerciseAngina", ""): 1,
            "ST_Slope_" + data.get("stSlope", ""): 1,
        }

        input_df = pd.DataFrame([raw_input])

        for col in expected_columns:
            if col not in input_df.columns:
                input_df[col] = 0

        input_df = input_df[expected_columns]

        print("\n===== INPUT DATAFRAME =====")
        print(input_df)
        print("===========================\n")

        scaled_input = scaler.transform(input_df)

        print("===== SCALED INPUT =====")
        print(scaled_input)
        print("========================")

        prediction = model.predict(scaled_input)[0]

        probability = model.predict_proba(scaled_input)[0]
        confidence = round(max(probability) * 100, 2)

        print("Prediction:", prediction)
        print("Probability:", probability)

        return jsonify({
            "prediction": int(prediction),
            "confidence": confidence
        })

if __name__ == "__main__":
        app.run(debug=True)