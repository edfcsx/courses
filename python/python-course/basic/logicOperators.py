print (7 != 3 and 7 != 7)
print (7 > 5 or 7 != 2)

# And operator table true
print('\nAnd operator table true')
print(True and True)
print(True and False)
print(False and True)
print(False and False)

#Or operator table true
print('\nOr operator table true')
print(True or True)
print(True or False)
print(False or True)
print(False or False)

#Xor operator table true
print('\nXor operator table true')
print(True != True)
print(True != False)
print(False != True)
print(False != False)

#Negation operation table true (unary)
print('\nNegation operator table true')
print(not True)
print(not False)

#Example
print('\n')
salary = 2000
balance = 1000
expenses = 1300

balance_positive = balance >= 0
expenses_control = salary - expenses >= 0.2 * salary

meta = balance_positive and expenses_control
print(meta)