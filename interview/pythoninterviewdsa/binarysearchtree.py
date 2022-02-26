# Algorith for add child 

#1) create a class add data self.right=none and self.left=None
#2)add Child
# a) create function and then check data value is equal to self.data if equal then return 
# b)if not equal then the conndition data will be in left sub tree or right sub tree
# so first check that if data < self.data if less then check whether there is left node is there or not if not there then if not there then assiggn it to the 
# class node will add a node and a data 
# 2 condition 



class BinarySearchTreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
    
    def add_child(self, data):
        if self.data == data:
            return # node already exist

        if data < self.data:
            if self.left:
                self.left.add_child(data)
            else:
                self.left = BinarySearchTreeNode(data)
        else:
            if self.right:
                self.right.add_child(data)
            else:
                self.right = BinarySearchTreeNode(data)
    

    def search(self,val):
        if self.data == val:
            return True
        
        if val < self.data:
            if self.left:
                return self.left.search(val)
            else:
                return False
            
        if val > self.data:
            if self.right:
                return self.right.search(val)
            else:
                return False

    def delete(self,val):
        if val < self.data:
            if self.left:
                self.left.delete(val)
        elif val > self.data:
            if self.right:
                self.right.delete(val)
        else:
            if self.left is None and self.right is None:
                return None
            elif self.left is None:
                return self.right
            elif self.right is None:
                return self.left

            min_val = self.right.find_min()
            self.data = min_val
            self.right = self.right.delete(min_val)

        return self

    def find_min(self):
        if self.left is None:
            return self.data
        return self.left.find_min() 
    
    def find_max(self):
        if self.right is None:
            return self.data
        return self.right.find_max()





    def in_order_transerval(self):
        elements = []

        if self.left:
            elements +=self.left.in_order_transerval()

        elements.append(self.data)

        if self.right:
            elements += self.right.in_order_transerval()

        return elements


def buildTree(elements):
    print("Building tree with these elements:",elements)
    root = BinarySearchTreeNode(elements[0])

    for i in range(1,len(elements)):
        root.add_child(elements[i])

    return root

if __name__ == '__main__':
    countries = ["India","Pakistan","Germany", "USA","China","India","UK","USA"]
    country_tree = buildTree(countries)

    print("UK is in the list? ", country_tree.search("UK"))

    number_tree = buildTree([17,1,4,20,8,23,18,34])
    number_tree.delete(20)
    print("number_tree:",  number_tree.in_order_transerval())

             


