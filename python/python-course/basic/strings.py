print(dir(str))
print('\n\n')

print('Dias D\'Avila' == 'Dias D\'Avila')

text = 'Texto entre aspostrofos podem ter aspas "duplas"'

doc = """Texto com multiplas
...linhas
"""

doc2 = '''Também é possivel com 3
aspas simples
'''

name = 'Eduardo Felipe'

print(name[0])
print(name[-3])
print(name[4:])
print(name[0:7])
print(name[:7])

numbers = '1234567890'
print(numbers[::2])
print(numbers[1::2])

#Invert string
print(numbers[::-1])

frase = 'Python é uma linguagem excelente'
print('py' not in frase)
print('ing' in frase)
print(len(frase))
print(frase.lower())
print(frase.split())

print('testando forma de imprimir a soma de {} + {} = {}'.format(1, 2, 1 + 2))