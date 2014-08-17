"""
Project Euler Problem #7
=========================

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
that the 6^th prime is 13.

What is the 10001^st prime number?
"""
import math


def is_prime(number):
    if number % 2 == 0:
        return False
    for value in range(2, int(math.ceil(math.sqrt(number)))):
        if number % value == 0:
            return False
    return True


def nth_prime(n):
    count = 0
    number = 2
    while True:
        if is_prime(number):
            count += 1
        if count == n:
            break
        number += 1
    return number


print(nth_prime(10001))
