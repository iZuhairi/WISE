from flask import Flask, request
from flask_cors import CORS

import google.generativeai as genai

app = Flask(__name__)
CORS(app)
genai.configure(api_key=".......")

system_prompt = """
You are WISE, a friendly science teacher for Students (Age range 13-25).
Explain using simple English, short paragraphs, and analogies.
Avoid unnecessary details unless asked.
"""

@app.route("/chat", methods=["POST"])
def chat():
    user_msg = request.json["message"]

    model = genai.GenerativeModel("gemini-2.0-flash")

    response = model.generate_content(
        system_prompt + "\nUser: " + user_msg,
        generation_config={
            "max_output_tokens": 200,
            "temperature": 0.7
        }
    )

    return {"reply": response.text}

if __name__ == "__main__":
    app.run(port=5000)

