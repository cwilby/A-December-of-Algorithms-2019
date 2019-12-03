import random


lengths = [100, 1000, 10000, 100000, 1000000]

for length in lengths:
    print(length)
    with open("%s.txt" % length, 'w') as f:
        for i in range(length):
            f.write("%s\n" % random.randint(1, 9999))