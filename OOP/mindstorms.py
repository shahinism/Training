import turtle


def draw_square():
    window = turtle.Screen()
    window.bgcolor("red")

    pos = 0
    for i in range(80):
        bob = turtle.Turtle()
        bob.right(pos)
        for i in range(4):
            bob.forward(100)
            bob.right(90)
        pos += 4.5
    window.exitonclick()

draw_square()
