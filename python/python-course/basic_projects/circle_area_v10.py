#! python
from math import pi
import sys


def circle(raio):
    return pi * float(raio) ** 2


if __name__ == '__main__':
    raio = sys.argv[1]
    area = circle(raio)
    print('Área do circulo : {}'.format(area))
