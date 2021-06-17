function treeSum(root){
    if(!root) return 0
    else {
        leftSum = treeSum(root.left)
        rightSum = treeSum(root.right)
        return root.data + leftSum + rightSum
    }
}

