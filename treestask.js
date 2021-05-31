const prompt = require('prompt-sync')({sigint: true}); 


class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }

    addChild = (child) => {
        if (this.children.length < 2 ) { 
        this.children.push(child);
        console.log(`added a child ${child.data}`)}
        else console.log(`child is an orphan`);
    };
    traverse = () => {
      let nodes = [this]; // to put the root node in our array
      while (nodes.length > 0) {
        let currentNode = nodes.pop();
        console.log(currentNode.data);
        nodes = [...nodes, ...currentNode.children];
      }
    };


      serchForParent = (child) => {
        //console.log(child)
        let nodes = [this]; // to put the root node in our array
        while (nodes.length > 0) {
          let currentNode = nodes.pop();
         if (child.data.split(" ")[1] === currentNode.data.split(" ")[0]){
             return currentNode
          }
          nodes = [...nodes, ...currentNode.children];
      }return "PERENT DOES NOT EXIST";
      };
      };

let  fullName = prompt(`enter child full name (done if finished): `)
const root = new TreeNode("family")
while (fullName !== "done"){
    let child = new TreeNode(fullName)
    //newTreee.addChild(fullName);
    let parent = root.serchForParent(child)
    if (parent !== "parent does not exist" )
    parent.addChild(child)
    else console.log(parent)
    //console.log("the child has been added");
    fullName = prompt(`enter child full name (done if finished): `)
}
root.traverse();