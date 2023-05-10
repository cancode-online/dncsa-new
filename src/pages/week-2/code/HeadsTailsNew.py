# Anthony Vo
# 11-14-17
# fortunecookies.py
# To practice using random numbers

#Imports random module
import random

#Gives messages
whichMessage = random.randrange(5)
if whichMessage == 0:
    print("You will soon have indigestion due to that fortune cookie.")
elif whichMessage == 1:
    print("You will buy more Kung Pao Chicken in the future.")
elif whichMessage == 2:
    print("Following this retaurant's Facebook page will make you prosperous.")
elif whichMessage == 3:
    print("If you go to that fake Chinese restaurant Panda Express, you will become poor.")
else:
    print("Not eating Chinese cuisine will cause you to have many unlucky days.")