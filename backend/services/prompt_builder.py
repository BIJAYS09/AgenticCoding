# services/prompt_builder.py
class PromptBuilder:
    def build(self, language: str, user_prompt: str) -> str:
        return f"""
You are an expert coding tutor.
Generate a {language} program for the following task:

Task: {user_prompt}

Explain the code and provide best practices.
Follow clean coding principles.
"""
