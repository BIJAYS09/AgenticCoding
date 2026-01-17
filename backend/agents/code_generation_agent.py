# agents/code_generation_agent.py
from interfaces.agent_interface import AgentInterface

class CodeGenerationAgent(AgentInterface):
    def __init__(self, llm_service, prompt_builder):
        self.llm_service = llm_service
        self.prompt_builder = prompt_builder

    def run(self, user_request):
        prompt = self.prompt_builder.build(
            user_request.language,
            user_request.prompt
        )
        return self.llm_service.generate(prompt)
