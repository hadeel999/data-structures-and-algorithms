let {HashTable} = require('../hashtables/hashtables');

function tree_intersection (tree1, tree2){
let tree1_results = tree1.postOrder(tree1.root);
let tree2_results = tree2.postOrder(tree2.root);
let common = [];
let hashtable = new HashTable();

for (let i = 0; i < tree1_results.length; i++) {
    hashtable.set(tree1_results[i], 1);
  }
  for (let i = 0; i < tree2_results.length; i++) {
    if (hashtable.contains(tree2_results[i])) {
        common.push(tree2_results[i]);
    }
  }
  return common;
}

module.exports = tree_intersection;