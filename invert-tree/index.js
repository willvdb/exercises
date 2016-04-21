var invertTree = function(root) {
  swapNodes(root);
  return root;

  function swapNodes(node) {
    if (node) {
      var tmp = node.left ? node.left : null;
      node.left = node.right ? node.right : null;
      node.right = tmp;
      if (node.right === null){
        delete node.right;
      }
      if (node.left === null){
        delete node.left;
      }
      swapNodes(node.left);
      swapNodes(node.right);
    }
  }
};

module.exports = invertTree;
