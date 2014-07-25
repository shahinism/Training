"""
Project Euler Problem #3
=========================

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
"""


def bpf(n):
    """Definition can be found
    http://stackoverflow.com/questions/15347174/python-finding-prime-factors
    """
    i = 2
    while i * i < n:
        while n % i == 0:
            n = n / i
        i = i + 1
    return n


print bpf(600851475143)
