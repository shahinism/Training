"""
Project Euler Problem #5
=========================

2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.

What is the smallest number that is evenly divisible by all of the numbers
from 1 to 20?
"""

# Resource: http://www.s-anand.net/euler.html
# https://en.wikipedia.org/wiki/Greatest_common_divisor
def gcd(a, b):
    return b and gcd(b, a % b) or a


# https://en.wikipedia.org/wiki/Least_common_multiple#A_simple_algorithm
def lcm(a, b):
    return abs(a * b) / gcd(a, b)

n = 1
for i in xrange(1, 21):
    n = lcm(n, i)

print n
