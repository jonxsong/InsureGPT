# InsureGPT

## High-Level Objective

We've been tasked to create an intersection between artificial intelligence and the insurance industry. Our first step is to create a functional UI for our Chatbot project. We can leverage the Python [Flask](https://flask.palletsprojects.com/en/2.3.x/) framework to create a functional backend server to run our Chatbot. With Flask, it is seamless to incorporate a prototype frontend which we can worry about once the backend is cemented. 

Moving forward, our primary goal will be to work with AI. While we don't have the insurance data (yet) necessary to train our own large language model (LLM), [OpenAI](https://openai.com/) has made it easy for developers to play around and experiment with their API. 

## Mission Statement

We want to create our own LLM trained with insurance data. We want this LLM to be wrapped by [LangChain](https://python.langchain.com/docs/get_started/introduction.html) with the end goal of providing users a document containing high-level requirements pertaining to their use case.


## Choosing an LLM

For our initial experimentations, we decided to use OpenAI's ChatGPT API, specifically using the gpt-3.5-turbo model, which was ChatGPT's primary LLM used for their initial product released on https://chat.openai.com/. 

## LLM Pricing

The price of using this powerful model is measured per 1000 tokens. We can think of tokens as pieces of words. 1000 tokens is approximately 750 words.

![Alt text](https://imgur.com/grgP8OA.jpeg)

The paragraph above is precisely 35 tokens.


## Example Usage

- User will input a prompt.
    - "You: Hey how are you doing?"

- InsureGPT will reply back with their trained response. 
    - "InsureGPT: I'm doing well, thank you. How about you?"

![Alt text](https://imgur.com/a6JoPyY.jpeg)


## Next Steps:

- Collect Insurance Data:
    - policy documents
    - claims forms
    - insurance regulations
    - customer reviews
    - industry reports
    - etc
- Prepare and Preprocess the data
    - remove irrelevant or sensitive information
    - ensure consistent formatting
    - tokenize text into smaller  "chunks"
        - use embedding algorithm
            - huggingface?
    - store "chunks" into Vector Store
        - Vector Store consists of vectorized representations of large documents
- Train the Language Model
    - use framework like OpenAI's GPT3.5 to train own model
    - adjust model's architecture as we go
    - adjust training parameters as we go
    - could take a substantial amount of computational power
    - could take a long time to process
- Fine-tune the Language Model (optional)
    - could use smaller, domain specific dataset
        - able to enhance performance on use-case
- Evaluate and Iterate
    - evaluate the performance of our LLM on a different dataset
    - split training/testing/validation
    - iterate on the training process
        - adjust hyperparameters as we go
        - introduce higher-quality data
- LangChain Integration
    - refer to this tutorial
        - https://www.freecodecamp.org/news/langchain-how-to-create-custom-knowledge-chatbots/
- Testing and Deployment



## How to Run Locally:

Clone the public GitHub repository:
     git clone https://github.com/jonxsong/InsureGPT.git
     cd InsureGPT
     cd app

Amend the .env file and add your own openai API token (attained from https://openai.com/api/)

Create a virtual environment (optional but recommended) using the following command:
     python -m venv env

Activate the virtual environment. The command for activation varies depending on your operating system:

- On Windows:
     env\Scripts\activate

- On macOS/Linux:
     source env/bin/activate

Install the project's dependencies by running the following command:
     pip install -r requirements.txt

Run the app:
     python app.py

Deployed on localhost so navigate to http://127.0.0.1:5000/