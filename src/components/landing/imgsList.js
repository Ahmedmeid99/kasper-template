class List {
    listSize = 0
    pos = 0 //position
    dataStore = []
    // append = this.append // function
    // find = this.find
    // remove = this.remove
    // length = this.length
    // length = this.length
    // toString = this.toString
    // insert = this.insert
    // contains = this.contains
    // clear = this.clear
    // front = this.front
    // end = this.end
    // prev = this.prev
    // next = this.next
    // currPos = this.currPos
    // moveTo = this.moveTo
    // getElement = this.getElement

    append(element) {
        this.dataStore[this.listSize++] = element
    }
    find(element) {
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] === element) {
                return i
            }
        }
        return -1
    }
    remove(element) {
        const founfAt = this.find(element) // element index
        if (founfAt > -1) {
            this.dataStore.splice(founfAt, 1)
            --this.listSize //remove 1 from listSize
            return true
        }
        return false
    }
    length() {
        return this.listSize
    }
    toString() {
        return this.dataStore
    }
    insert(element, after) {
        const insertPos = this.find(after)
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element)
            ++this.listSize
            return true
        }
        return false
    }
    clear() {
        delete this.dataStore //remove dataStore
        this.dataStore = [] //reset dataStore again
        this.listSize = this.pos = 0
    }
    front() {
        this.pos = 0
    }
    end() {
        this.pos = this.listSize - 1
    }
    prev() {
        if (this.pos > 0) {
            --this.pos
        } else {
            this.pos = this.listSize - 1
        }
    }
    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos
        } else {
            this.pos = 0
        }
    }
    currPos() {
        return this.pos // 0 1 2 3
    }
    moveTo(position) {
        this.pos = position
    }
    getElement() {
        return this.dataStore[this.pos] // "learn node" "..." "..."
    }

}
export default List