const prompt = require('prompt-sync')({sigint: true}); 

//console.log(age)
class Node {
    constructor(age, highlight ,nextNode = null) {
      this.age = age;
      this.highlight = highlight
      this.nextNode = nextNode; // our link
    }
  }

  class LinkedList {
    constructor(age, highlight, nextNode) {
      this.head = new Node(age, highlight, nextNode);
    }

    addBeginning = (age , highlight) => {
        const node = new Node(age, highlight , this.head);
        this.head = node;
      };
    
      getLinkedList = () => {
          let current = this.head;
          while (current) {
              console.log(`year : ${current.age} , highlight : ${current.highlight} : `)
              current = current.nextNode;
          }
      }
      inserthighlight= (age) =>{
      let current = this.head;
      while (current.age < age)  {
          let currentAge =current.age +1 ;
        if (current.nextNode && current.nextNode.age === currentAge) {
            current = current.nextNode;
        }     
      else {
          let highlight = prompt(`enter highlight for year ${currentAge}`)
          let newNode = new Node(currentAge, highlight, current.nextNode);
          current.nextNode = newNode;
          current = newNode;
      }
    }
      }
      }
      const ageList = new LinkedList(7, "i was seven")
      ageList.addBeginning(3, "i started walking")
      ageList.addBeginning(1, "i was born")
      let age = prompt("enter your age :")
      ageList.inserthighlight(age)
      ageList.getLinkedList()

