class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SingleList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }

    }
}

let list = new SingleList()
list.push("hello")
list.push("ram")
list.push("shyam")