#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if number < 0:
    last_num = number % -10
elif number > 0:
    last_num = number % 10
if number > 5:
    print(f"Last digit of {number} is {last_num} and greater than 5")
elif number == 0:
    print(f"Last digit of {number} is {last_num} and is 0")
else:
    print(f"Last digit of {number} is {last_num} and less than 6 and not 0")
