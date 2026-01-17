# interfaces/agent_interface.py
from abc import ABC, abstractmethod

class AgentInterface(ABC):
    @abstractmethod
    def run(self, user_request):
        pass
