# main.py
from services.gemini_service import GeminiService
from services.prompt_builder import PromptBuilder
from agents.code_generation_agent import CodeGenerationAgent
from dotenv import load_dotenv
import os
from fastapi import FastAPI
from routers.generate import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router, prefix="/api")