class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element) // it 10 
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1 // this will be 0
        let element = this.values[index] // this will ehaterver the value si index 0 that is 10
        while (index > 0) { // in the first case index will be 0  index > 0  0 > 0
            let parentIndex = Math.floor((index - 1) / 2) // suppose there is 1,2,3,4,5,6,7 0 - 1 /2 0 
            let parent = this.values[parentIndex]

            if (element <= parent) break
            let idx = this.values[parent]
            this.values[parent] = element
            idx = parentIndex
        }
    }
}

let result = new MaxBinaryHeap()
result.insert(10)
result.insert(20)
// console.log(result)