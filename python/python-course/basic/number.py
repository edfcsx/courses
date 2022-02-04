from decimal import Decimal, getcontext

# print(dir(int))
# print(dir(float))

a = 5
b = 2.5

a / b
a + b
a * b

print(type(a))
print(type(b))

print(b.is_integer())
print(5.0.is_integer())

print(int.__add__(2, 6))

print((-2).__abs__())
print(abs(-2))

print(Decimal(1) / Decimal(7))
getcontext().prec = 4
print(Decimal(1) / Decimal(7))
print(Decimal.max(Decimal(1), Decimal(7)))

print(1.1 + 2.2)
getcontext().prec = 2
print(Decimal(1.1) + Decimal(2.2))