#! python
from math import pi
import sys


def help():
    print('É necessário informar a área do circulo')
    print('Sintaxe: {} <raio>'.format(sys.argv[0]))


def circle(raio):
    return pi * float(raio) ** 2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        help()
    else:
        raio = sys.argv[1]
        area = circle(raio)
        print('Área do circulo : {}'.format(area))
