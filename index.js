class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

// initalize trie
var Trie = function () {
  this.root = new TrieNode();
};

// insert word
Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (let c of word) {
    if (!curr.children.has(c)) {
      curr.children.set(c, new TrieNode());
    }
    curr = curr.children.get(c);
  }
  curr.endOfWord = true;
};

// search for word
Trie.prototype.search = function (word) {
  let curr = this.root;
  for (let c of word) {
    if (!curr.children.get(c)) {
      return false;
    }
    curr = curr.children.get(c);
  }

  return curr.endOfWord === true;
};

// search prefix
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;
  for (let c of prefix) {
    if (!curr.children.get(c)) {
      return false;
    }
    curr = curr.children.get(c);
  }
  return true;
};
