class Node {
    constructor(data, nextNode = null) {
      this.data = data;
      this.nextNode = nextNode;
    }
  }
  
  class Queue {
    constructor(limit = null) {
      this.frontNode = null;
      this.backNode = null;
      this.limit = limit;
      this.size = 0;
    }
  
    isEmpty = () => this.size === 0;
  
    isFull = () => this.size === this.limit;
  
    peek = () => {
      if (this.isEmpty()) console.log("Empty queue!");
      else return this.frontNode;
    };
  
    enqueue = (data) => {
      if (this.isFull()) console.log("There's no place for you here");
      else {
        const newNode = new Node(data);
        if (this.isEmpty()) {
          // the new node is both the front and back node
          this.frontNode = newNode;
          this.backNode = newNode;
        } else {
          // link the backnode to the new node then make the newnode the backnode
          this.backNode.nextNode = newNode;
          this.backNode = newNode;
        }
        this.size++;
      }
    };
  
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("OOps! Nothing to remove.");
      } else {
        const removedNode = this.frontNode;
        if (this.size === 1) {
          this.frontNode = null;
          this.backNode = null;
        } else {
          this.frontNode = removedNode.nextNode;
        }
        this.size--;
        return removedNode.data;
      }
    };
  }
  const kfcQueue = new Queue(3);

  kfcQueue.enqueue("Esraa");
  kfcQueue.enqueue("Yousef");
  kfcQueue.enqueue("Omar");
  kfcQueue.enqueue("Zainab");
  
  console.log(kfcQueue.peek());
  
  console.log("Enjoy your meal", kfcQueue.dequeue());
  console.log("Enjoy your meal", kfcQueue.dequeue());
  
  console.log(kfcQueue.peek());  