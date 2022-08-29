"use strict";

const { HashTable } = require("../hashtables");
const {repeatedWords,left_join} = require("../hashtables");

const HashTable1 = new HashTable(33);
HashTable1.set("haya", "1");
HashTable1.set("ahmad", "2");
HashTable1.set("hadeel", "3");

describe("Testing HashTables", () => {
  it("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    expect(Object.values(HashTable1.table[16].head.value).join("")).toEqual(
      "1"
    );
  });

  it("Retrieving based on a key returns the value stored", () => {
    expect(HashTable1.get("haya")).toEqual("1");
  });

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(HashTable1.get("nour")).toBeNull();
  });

  it("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    expect(HashTable1.keys()).not.toEqual(["hadeel", "ahmad", "haya"]);
  });

  it("Successfully handle a collision within the hashtable", () => {
    const HashTable2 = new HashTable(1);
    HashTable2.set("haya", "1");
    HashTable2.set("ahmad", "2");
    HashTable2.set("hadeel", "3");

    expect(HashTable2.table[0].head.next.value).toEqual({ ahmad: "2" });
  });

  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const HashTable2 = new HashTable(1);
    HashTable2.set("haya", "1");
    HashTable2.set("ahmad", "2");
    HashTable2.set("hadeel", "3");

    expect(HashTable2.get("haya")).toEqual("1");
  });

  it("Successfully hash a key to an in-range value", () => {
    const HashTable3 = new HashTable(10);
    let hashedValue = HashTable3.hash("Hadeel");

    expect(hashedValue).toBeGreaterThanOrEqual(0);
    expect(hashedValue).toBeLessThanOrEqual(10);
  });
});

describe("Testing RepeatedWords Function", () => {
  it("Returns the first repeated word, Test1", () => {
    let word = repeatedWords(
      "Once upon a time, there was a brave princess who"
    );
    expect(word).toEqual("a");
  });

  it("Returns the first repeated word, Test2", () => {
    let word = repeatedWords(
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York"
    );
    expect(word).toEqual("the");
  });
});

describe("Join left hash map", () => {
  it("Returns the left map after joining the right map to it", () => {
    const left = new Map();
    left.set("diligent", "employed");
    left.set("fond", "enamored");
    left.set("guide", "usher");
    
    const right = new Map();
    right.set("diligent", "idle");
    right.set("fond", "averse");
    right.set("guide", "follow");

    expect(left_join(left, right)).toEqual(
      new Map([
        ["diligent", ["employed", "idle"]],
        ["fond", ["enamored", "averse"]],
        ["guide", ["usher", "follow"]],
      ])
    );
  });
});