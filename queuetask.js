class Node{
    constructor(groupSize, next=null){
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue{
      constructor(limit=4, front=null, back=null){
          this.limit = limit
          this.front = null
          this.back = null
          this.size = 0
          this.waiting = 0
        }
        isEmpty = () => this.size === 0;
  
        isFull = () => this.size === this.limit;

        peek = () => {
            if (this.isEmpty()) console.log("Empty queue!");
            else return this.front;
          };
        enqueue = (groupSize) => {
             if (this.isFull()) console.log("you must wait")
             else {
                 const newNode = new Node(groupSize)
                 if (this.isEmpty) {
                     this.front =newNode
                     this.back =newNode
                     this.waiting += groupSize*0.5
                 }else {
                     this.back.next = newNode
                     this.back = newNode
                     this.waiting += groupSize*0.5
                 }this.size++;
                }
       }

       dequeue = () => {
        if (this.isEmpty()) {
          console.log("empty");
        } else {
            const removedNode = this.front;
          if (this.size === 1) {
            this.front = null;
            this.back = null;
            this.waiting = 0
          } else {
            this.front = removedNode.next;
            this.waiting -= removedNode.groupSize*0.5 
          }
          this.size--;
          return removedNode.groupSize;
        }
      };

    }

    const ride = new Queue(4)
    groups = [2,7 , 12, 17,24]
    console.log(ride.waiting)

    groups.forEach(group=> {
        if (!ride.isFull()) {
            while (group >12) {
                ride.enqueue(12)
                group -= 12
            }
            ride.enqueue(group)
        }
    });
        console.log(ride.waiting);

        ride.dequeue();
        console.log(ride.peek());
        console.log(ride.waiting);