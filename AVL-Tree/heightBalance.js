class Node {
    constructor(data){
        this.data = data
    }
}

function height(root){
    if(!root) return 0
    return Math.max(height(root.left), height(root.right)) + 1
}