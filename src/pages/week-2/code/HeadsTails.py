# Anthony Vo
# 11-14-17
# coinflip.py
# To practice using random numbers

#Imports random module
import random

#Initializes variables
numberOfHeads = 0
numberOfTails = 0

#Flips coins
for number in range(20):
    coinSide = random.randrange(2)
    if coinSide == 0:
        numberOfHeads = numberOfHeads + 1
        print("Heads")
    else:
        numberOfTails = numberOfTails + 1
        print("Tails")

#Gives result
print(f"Overall, heads was flipped {numberOfHeads} times while tails was flipped {numberOfTails} times.")