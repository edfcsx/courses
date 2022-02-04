#! python
from math import pi
import sys
import errno


class TerminalColor:
    red = '\033[91m'
    default = '\033[0m'


def help():
    print('É necessário informar a área do circulo')
    print('Sintaxe: {} <raio>'.format(sys.argv[0]))


def circle(raio):
    return pi * float(raio) ** 2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        help()
        sys.exit(errno.EPERM)
    elif not sys.argv[1].isnumeric():
        help()
        print(TerminalColor.red + 'O raio deve ser um valor númerico' +
              TerminalColor.default)
        sys.exit(errno.EINVAL)
    else:
        raio = sys.argv[1]
        area = circle(raio)
        print('Área do circulo : {}'.format(area))
