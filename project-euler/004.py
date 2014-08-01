"""
Project Euler Problem #4
=========================

A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
"""


def is_palindromic(number):
    """
    Return True if the number is a palindromic.
    """
    return number == int(str(number)[::-1])

largest_palindrome = 0

for val1 in range(100, 999):
    for val2 in range(val1, 999):
        product = val1 * val2
        if is_palindromic(product) and largest_palindrome < product:
            largest_palindrome = product

print largest_palindrome
