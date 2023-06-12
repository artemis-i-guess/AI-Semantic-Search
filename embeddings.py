import openai

openai.api_key = "YOUR_API_KEY"
# get API key from top-right dropdown on OpenAI website

openai.Engine.list()  # check we have authenticated

MODEL = "text-embedding-ada-002"

res = openai.Embedding.create(
    input=[
        "Sample document text goes here",
        "there will be several phrases in each batch"
    ], engine=MODEL
)