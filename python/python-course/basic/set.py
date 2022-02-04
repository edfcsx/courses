a = {1, 2, 3}
print(type(a))

a = set('cooodeer')
print(a)
print('3' in a)

# Operators
c1 = {1, 2}
c2 = {2, 3}

print(c1.union(c2))
print(c1.intersection(c2))

c1.update(c2)
print(c1)