from dotenv.main import load_dotenv
from flask import Flask, request
import pandas as pd
from datasets import load_dataset
import os
import openai
from tqdm.auto import tqdm
import pinecone
import json


app = Flask('__name__')

load_dotenv()
OPENAI_KEY = os.environ['OPENAI_KEY']
PINECONE_KEY = os.environ['PINECONE_KEY']

openai.api_key = OPENAI_KEY

openai.Engine.list()
MODEL = "text-embedding-ada-002"

# initializing connection to pinecone 
pinecone.init(
    api_key=PINECONE_KEY,
    environment="us-west4-gcp-free"  
)

index_name = 'semantic-search'
index = pinecone.Index(index_name)

@app.route("/search",methods = ["POST"])
def search():
    query = request.get_json()
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt= query,
        temperature=0.3,
        max_tokens=15,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    vector = openai.Embedding.create(input=query, engine=MODEL)['data'][0]['embedding']
    res = index.query([vector], top_k=5, include_metadata=True)

    final = {}
    for i in range(len(res['matches'])):
        final[i] = res['matches'][i]['id']

    jsonresult = json.dumps(final)
    
    return jsonresult


if __name__ == "__main__":
    app.run(debug=True)