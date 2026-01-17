from fastapi import APIRouter
from models.user_request import UserRequest
from services.gemini_service import GeminiService
from services.prompt_builder import PromptBuilder
from agents.code_generation_agent import CodeGenerationAgent

router = APIRouter()

llm = GeminiService("YOUR_API_KEY")
prompt_builder = PromptBuilder()
agent = CodeGenerationAgent(llm, prompt_builder)

@router.post("/generate")
def generate_code(request: UserRequest):
    result = agent.run(request)
    return {"response": result}
