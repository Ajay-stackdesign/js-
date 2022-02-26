# 5,1,4,2,8

# bubble sort

def bubble_sort(data):
    size = len(data)

    for i in range(size-1):
        swapped = False
        for j in range(size-i-1):
            if data[j] > data[j+1]:
                temp = data[j]
                data[j] = data[j+1]
                data[j+1] = temp
                swapped = True
            
            if not swapped:
                break

element = [12,23,25,1,43,54,65]
bubble = bubble_sort(element)
print(bubble)


