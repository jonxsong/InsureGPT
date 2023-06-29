import os
from dotenv import load_dotenv
import openai
from flask import Flask, redirect, render_template, request, url_for, jsonify

app = Flask(__name__)
load_dotenv() 
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        question = request.form["question"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=question,
            temperature=0.6,
            max_tokens=100,
            n=1,
            stop=None,
        )
        return response.choices[0].text.strip()

    result = request.args.get("result")
    return render_template("index.html", result=result)

if __name__ == '__main__':
    app.run(debug=True)
