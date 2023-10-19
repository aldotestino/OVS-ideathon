import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import Model

PORT = 3001
origins = [
    "*",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = Model()

class Prompt(BaseModel):
    message: str

@app.post("/generate_copy")
def generate_copy(prompt: Prompt):
    if len(prompt.message) < 10:
        raise HTTPException(status_code=400, detail="Message too short")
    copy = model.predict(prompt.message)
    return {"copy": copy}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=PORT)