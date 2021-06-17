function treeSum(root){
    if(!root) return 0
    else {
        leftSum = treeSum(root.left)
        rightSum = treeSum(root.right)
        return root.data + leftSum + rightSum
    }
}

function treeMax(root){
    if(!root) return Number.NEGATIVE_INFINITY 
    else {
        leftMax = treeMax(root.left)
        rightMax = treeMax(root.right)
        return Math.max(root.data, leftMax, rightMax)
    }
}

function treeHeight(root){
    if(!root) return 0
    else {
        leftHeight = treeHeight(root.left)
        rightHeight = treeHeight(root.right)
        return 1 + Math.max(leftHeight, rightHeight)
    }
}