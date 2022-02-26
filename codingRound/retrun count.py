# def count_number(string):
#     count = 0
#
#     while string:
#         count +=1
#     return count
#
# result=count_number("charcater")
# print(result)
#
#

def alternate(arr,n):

    output = []
    # size = len(arr)
    for i in range(0, n):
        if arr[i] % 2 == 0:
            output.append(i)
    return output

arr = [1,2,3,4,5]
n =5
result = alternate(arr,n)
print(result)
