#! python


def nota_conceito(value):
    note = float(value)

    if note > 10:
        return 'nota inválida'
    elif note >= 9.1:
        return 'A'
    elif note >= 8.1:
        return 'A-'
    elif note >= 7.1:
        return 'B'
    elif note >= 6.1:
        return 'B-'
    elif note >= 5.1:
        return 'C'
    elif note >= 4.1:
        return 'C-'
    elif note >= 3.1:
        return 'D'
    elif note >= 2.1:
        return 'D-'
    elif note >= 1.1:
        return 'E'
    elif note >= 0:
        return 'E-'
    else:
        return 'Nota inválida'


if __name__ == '__main__':
    note = input('Informe a nota do aluno: ')
    print('O conceito da nota do aluno é: {}'.format(nota_conceito(note)))

    # if not note.isnumeric():
    #     print('O valor da nota deve ser um valor númerico')
    # else:
