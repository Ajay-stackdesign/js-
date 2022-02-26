def addUpto(n):
    sum = 0

    for i in range(0, n+1):
        sum +=i
    return sum

var = addUpto(10)
print(var)