# trie-ds-autocomplete
A trie or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

In a trie data structure, each character is stored as a node. So the root of the tree can have upto 26 children. The idea is that all strings sharing common prefix should come from a common node.

Suppose you want to search for all the words starting with "B" in a dataset comprising of over 10 million words. If we use an array and iterate over every word, the time complexity will be O(n) and we will have to go over every word. With a trie, the time complexity would be O(26) which is O(1).

