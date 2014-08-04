"""
Project Euler Problem #5
=========================

2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.

What is the smallest number that is evenly divisible by all of the numbers
from 1 to 20?
"""
number = 232792560 - 10

def divisible(number):
    for value in range(1, 21):
        if number % value != 0:
            return False
    return True


while True:
    if divisible(number):
        print number
        break
    else:
        print "Test failed: " + str(number)
        number += 1
            
