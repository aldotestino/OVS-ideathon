from typing import Union

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from model import Model

app = FastAPI()

model = Model()

class Prompt(BaseModel):
    message: str


@app.post("/generate_copy")
def generate_copy(prompt: Prompt):
    if len(prompt.message) < 10:
        raise HTTPException(status_code=400, detail="Message too short")
    prompt += " di massimo 250 caratteri"
    copy = model.predict(prompt.message)
    return {"copy": copy}

