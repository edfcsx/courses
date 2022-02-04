its_raining = True

message = "It's raining " + ('nothing', 'Hallelujah')[its_raining] # sequence FALSE , TRUE
messageone = "It's raining " + ('nothing' if its_raining else 'Hallelujah') # sequence TRUE , FALSE

print(message)
print(messageone)