class HashTable {
    constructor(arraySize) {
      this.arraySize = arraySize;
      this.array = new Array(arraySize).fill(null);
    }
  
    compress = (hashCode) => hashCode % this.arraySize;
  
    hash = (key, collisionCount = 0) => {
      const encoded = new TextEncoder("utf-8").encode(key);
      let hashCode = 0;
      encoded.forEach((element) => (hashCode += element)); // this can be replaced with `.reduce`
      return hashCode + collisionCount;
    };
  
    insert = (key, value) => {
      let collisionCount = 0;
      while (true) {
        // hash & compress
        const hashCode = this.hash(key, collisionCount);
        const index = this.compress(hashCode);
        const currentArrayValue = this.array[index];
        // if index is empty, insert the key and value
  
        if (!currentArrayValue || currentArrayValue[0] === key) {
          this.array[index] = [key, value];
          break;
        } else {
          // if index not empty, increment collisionCount and repeat steps above
          collisionCount++;
        }
      }
    };
  
    search = (key) => {
      let collisionCount = 0;
      while (true) {
        const hashCode = this.hash(key, collisionCount);
        const index = this.compress(hashCode);
        const currentArrayValue = this.array[index];
  
        if (!currentArrayValue) return "This place is empty";
  
        if (currentArrayValue[0] === key) {
          return currentArrayValue[1]; // this will returnthe value only
        }
        collisionCount++;
      }
    };
  }
  
  const hashTable = new HashTable(15);
  hashTable.insert("Obi-Wan Kenobi", "Jedi Master");
  hashTable.insert("Anakin Skywalker", "Jedi Knight");
  hashTable.insert("Ahsoka Tano", "Padawan");
  
  console.log(hashTable.search("Obi-Wan Kenobi"));
  console.log(hashTable.search("Anakin Skywalker"));
  console.log(hashTable.search("Ahsoka Tano"));
  
  // const books = new HashTable(10);
  // books.insert("Crooked Kingdom", 2012);
  // console.log(books.search("Crooked Kingdom"));
  // // console.log(books.array);
  
  // const books = {
  //   "Six of Crows": 2012,
  //   "Crooked Kingdom": 2016,
  // };
  
  // title -> hashing function -> array index -> go to this array index and save "Six of Crows"
  
  // const encoded = new TextEncoder("utf-8").encode("laila");
  // console.log("🚀 ~ file: HashTables.js ~ line 20 ~ encoded", encoded);