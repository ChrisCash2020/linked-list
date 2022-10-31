class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}
// the this.next isn't a argument called when you intialize a new class its use to link through the use of methods

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  //for these class methods I assign variable to this.headnode
  // Which enables me to traverse through the list without typing this.headNode.next.next....
  //What ever is done to the variable will have a direct affect

  prepend(value) {
    let tmp = null;
    if (this.headNode != null) tmp = this.headNode;
    // if the list isn't empty assign the node head to tmp
    this.headNode = new Node(value);
    // this code above deletes the list but makes this new node the head
    this.headNode.next = tmp;
    //this code gives the newly created head a next target of either a list copied onto tmp or null if a list didn't exist to begin with;
  }
  append(value) {
    if (this.headNode === null) this.headNode = new Node(value);
    else {
      let tmp = this.headNode;
      while (tmp.next != null) tmp = tmp.next;
      tmp.next = new Node(value);
    }
  }
  size() {
    if (this.headNode === null) return 0;
    let i = 1;
    let tmp = this.headNode;
    while (tmp.next != null) {
      tmp = tmp.next;
      i++;
    }
    return i;
  }
  head() {
    return this.headNode;
  }
  tail() {
    let tmp = this.headNode;
    while (tmp.next != null) tmp = tmp.next;
    return tmp;
  }
  at(index) {
    let tmp = this.headNode;
    if (tmp === null) return 'Invalid Index';
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
      if (tmp == null) return 'Invalid Index';
    }
    return tmp;
  }
  pop() {
    let cur = this.headNode;
    let prev;
    while (cur.next != null) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
  }
  contains(value) {
    let tmp = this.headNode;
    if (tmp === null) return false;
    if (tmp.value === value) return true;
    while (tmp.next != null) {
      tmp = tmp.next;
      if (tmp.value === value) return true;
    }
    return false;
  }
  find(value) {
    let tmp = this.headNode;
    if (tmp === null) return null;
    let i = 0;
    if (tmp.value === value) return i;
    while (tmp.next != null) {
      i++;
      tmp = tmp.next;
      if (tmp.value === value) return i;
    }
    return null;
  }
  toString() {
    let tmp = this.headNode;
    if (tmp === null) return '(null)';
    let string = `( ${tmp.value} ) -> `;
    while (tmp.next != null) {
      tmp = tmp.next;
      string += `( ${tmp.value} ) -> `;
    }
    return (string += `null`);
  }
}

let List = new LinkedList();
