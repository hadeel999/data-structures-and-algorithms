const linkedlist = require("../javascript/LinkedLists/lib/linkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    const asciicodeSum = key.split("").reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const theIndex = multiPrime % this.size;
    console.log(theIndex)
    return theIndex;
  }

  set(key, value) {
    let hashIndex = this.hash(key);
    console.log({ hashIndex });
    if (!this.table[hashIndex]) {
      this.table[hashIndex] = new linkedlist();
    }

    let entryData = { [key]: value };
    this.table[hashIndex].append(entryData);
  }

  get(key) {
    let hashIndex = this.hash(key);
    let bucket = this.table[hashIndex];
    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        } else {
          current = current.next;
        }
      }
    }
    return null;
  }

  contains(key) {
    let hashIndex = this.hash(key);
    if (this.table[hashIndex]) {
      let current = this.table[hashIndex].head;
      while (current) {
        if (current.value[key]) return true;
        current = current.next;
      }
      return false;
    } else {
      return false;
    }
  }

  keys() {
    let arr =[]
    for (const key in this.values) {
      if (this.values.hasOwnProperty(key)) {
        
        arr.push(key);
      }
    }
    console.log(arr);
    return arr;
  }
}

  function repeatedWords(text) {
    let record = new HashTable(15);
    let word = text.split(" ");
    for (let i = 0; i < word.length; ++i) {
      if (record.contains(word[i])) {
        record.set(word[i], record.get(word[i]) + 1);
        return word[i];
      } else {
        record.set(word[i], 1);
      }
    }
}

function left_join(leftHashMap, rightHashMap) {
  for(let [key, value] of leftHashMap) {
    console.log(value)
    let rightValue = null
    rightHashMap.has(key) ? rightValue = rightHashMap.get(key) : null
    leftHashMap.set(key, [value, rightValue])
  }
  return leftHashMap
}

module.exports = {HashTable,repeatedWords,left_join}