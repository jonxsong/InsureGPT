from flask import Flask, render_template, request, jsonify
import openai
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Create Flask application
app = Flask(__name__)

# Set OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.form['user_message']
    bot_response = generate_response(user_message)
    return jsonify({'response': bot_response})


def generate_response(user_message):
    # Call OpenAI API to generate a response
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=user_message,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.7
    )

    # Extract the generated response
    bot_response = response.choices[0].text.strip()

    return bot_response


if __name__ == '__main__':
    app.run(debug=True)
