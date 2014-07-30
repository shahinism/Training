"""
Project Euler Problem #2
=========================

Each new term in the Fibonacci sequence is generated by adding the
previous two terms. By starting with 1 and 2, the first 10 terms will be:

                  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Find the sum of all the even-valued terms in the sequence which do not
exceed four million.
"""
def Fibonacci(n):
    if n < 2:
        return n
    return Fibonacci(n - 1) + Fibonacci(n - 2)

sum = 0
i = 0
while True:
    if Fibonacci(i) % 2 != 0:
        sum += Fibonacci(i)
        if sum > 4000000:
            break
    i += 1

print sum