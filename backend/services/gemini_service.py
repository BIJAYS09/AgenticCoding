# services/gemini_service.py
from google import genai
from interfaces.llm_interface import LLMInterface
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY=os.getenv("GEMINI_API_KEY")
class GeminiService(LLMInterface):
    def __init__(self, api_key: str):
        self.client = genai.Client(api_key=API_KEY)

    def generate(self, prompt: str) -> str:
        response = self.client.models.generate_content(
            model="gemini-3-flash",
            contents=prompt
        )
        return response.text
