from dotenv import load_dotenv
import os

test = os.getenv("TEasST")

if test:
    print(test)
else:
    print("Waley")

