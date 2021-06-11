class Node {
    constructor(data){
        this.data = data
    }
}

function height(root){
    if(!root) return 0
    return Math.max(height(root.left), height(root.right)) + 1
}

function isBalanced(root){
    if(!root) return true

    let l = height(root.left)
    let r = height(root.right)

    if( Math.abs(l - r) <= 1 
        && isBalanced(root.left)
        && isBalanced(root.right)){
            return true
        }
    
    return false
}