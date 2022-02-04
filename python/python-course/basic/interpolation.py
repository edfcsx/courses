from string import Template
nome = 'ana'
idade = 30.987

print('Nome: %s Idade: %.2f' % (nome, idade))
print('Nome: {0} Idade: {1}'.format(nome, idade))
print(f'Nome: {nome} Idade: {2 ** 8 + 1}')

a = Template('Nome: $nome, Idade: $idade')
print(a.substitute(nome=nome, idade=idade))