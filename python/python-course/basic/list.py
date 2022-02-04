lista = []
lista.append(1)
lista.append(2)

print('Lista: {} o tamanho da lista e : {}'.format(lista, len(lista)))

nova_lista = [2, 12, 'Bia', {'hello': 'world'}]
nova_lista.remove({'hello': 'world'})
nova_lista.reverse()

print('\nNova lista: {}'.format(nova_lista))
print('Bia encontra-se na posicao {} da lista'.format(nova_lista.index('Bia')))
print('Existe algum pedro na lista ? {}'.format(('sim' if 'pedro' in nova_lista else 'nao')))
print('Primeiro elemento da lista: {}, ultimo elemento da lista: {}'.format(nova_lista[0], nova_lista[-1]))