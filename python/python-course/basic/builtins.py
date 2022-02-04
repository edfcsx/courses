# Builtins
__builtins__ = __builtins__

print(type(1))
print(__builtins__.type('Text'))
__builtins__.print('test')

print(__builtins__.help(__builtins__.dir))

print(dir(__builtins__))