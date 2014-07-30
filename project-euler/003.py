"""
Project Euler Problem #3
=========================

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
"""

# My resources:
# http://stackoverflow.com/questions/15347174/python-finding-prime-factors
# http://code.activestate.com/recipes/577037-pollard-rho-prime-factorization/
# http://comeoncodeon.wordpress.com/2010/09/18/pollard-rho-brent-integer-factorization/
# http://stackoverflow.com/questions/21684675/largest-prime-factor-python
# http://stackoverflow.com/questions/15347174/python-finding-prime-factors
# http://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm
# http://stackoverflow.com/questions/23287/largest-prime-factor-of-a-number
# http://people.revoledu.com/kardi/tutorial/BasicMath/Prime/Algorithm-PrimeFactor.html


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
