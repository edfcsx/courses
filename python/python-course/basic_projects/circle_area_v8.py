#! python
from math import pi


def circle(raio):
    print('Área do circulo: ', pi * float(raio) ** 2)


if __name__ == '__main__':
    raio = input('informe o raio: ')
    circle(raio)
