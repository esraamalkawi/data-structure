const arr = [1, 2, 3];
const newArray = [...arr, 4, 5];
console.log("🚀 ~ file: Trees.js ~ line 3 ~ newArray", newArray);

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild = (node) => {
    this.children.push(node);
  };

  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = () => {
    let nodes = [this]; // to put the root node in our array
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      console.log(currentNode.data);
      nodes = [...nodes, ...currentNode.children];
    }
  };
}

const root = new TreeNode("Ahmad");
const childOne = new TreeNode("Fahad");
const childTwo = new TreeNode("Jassim");

root.addChild(childOne);
root.addChild(childTwo);

// console.log(root.children);

// root.removeChild(childTwo);

// console.log(root.children);

const anotherChild = new TreeNode("Farah");
childOne.addChild(anotherChild);

const anotherChildTwo = new TreeNode("Abdallah");
childTwo.addChild(anotherChildTwo);

root.traverse();
// console.log(root.children);