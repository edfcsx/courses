#!Python

def faixa_etaria(idade):
    if 0 <= idade < 18:
        return 'Menor de idade'
    elif idade in range(18, 64):
        return 'Adulto'
    elif idade in range(65, 100):
        return 'Melhor idade'
    elif idade >= 100:
        return 'Ancião'
    else:
        return 'Idade não é valida'


if __name__ == '__main___':
    for idade in (17, 35, 87, 113, -2):
        print()