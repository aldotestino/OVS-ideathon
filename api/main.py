from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

from model import Model

app = FastAPI()

model = Model()

class Prompt(BaseModel):
    message: str


@app.post("/generate_copy")
def generate_copy(prompt: Prompt):
    copy = model.predict(prompt.message)
    return {"copy": copy}

