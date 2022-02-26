# print middle Number of the element for eampe 1->2->3->4->5  middle: 3

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class CountNode:
    def __init__(self):
        self.head = None
        self.tail = None

    def addNode(self,data):
        newNode = Node(data)

        if(self.head == None):
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode

    def countNodes(self):
        count = 0

        current = self.head
        if(self.head == None):
            return 

        while(current != None):
            count +=1
            current = current.next
        return count
    
    def middleNumber(data):
        size = len(data)

        middle_number = size // 2

        return middle_number

    def display(self):

        current = self.head

        if(self.head == None):
            print("List is empty")
            return

        print("Linkedlist is there")
        while(current !=None):
            print(current.data)

            current = current.next

list = CountNode()

list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)

list.display()
# data = [1,2,3,4,5]
list.middleNumber()



