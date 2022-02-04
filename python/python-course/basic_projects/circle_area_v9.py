#! python
from math import pi


def circle(raio):
    return pi * float(raio) ** 2


if __name__ == '__main__':
    raio = input('informe o raio: ')
    area = circle(raio)
    print('Área do circulo : {}'.format(area))
