# ui/console_ui.py
from models.user_request import UserRequest

class ConsoleUI:
    def get_user_input(self):
        language = input("Select Programming Language: ")
        prompt = input("Enter what you want to learn/build: ")
        return UserRequest(language, prompt)

    def display_output(self, output):
        print("\n--- AI Generated Code & Explanation ---\n")
        print(output)
