# models/user_request.py
from pydantic import BaseModel

class UserRequest(BaseModel):
    language: str
    prompt: str
