"""
Project Euler Problem #3
=========================

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
"""


def isPrime(number):
    for n in range(2, number - 1):
        if number % n == 0:
            return False
    return True


def primeFactor(number):
    for n in range(2, number):
        if number % n == 0 and isPrime(n):
            print n

primeFactor(600851475143)
