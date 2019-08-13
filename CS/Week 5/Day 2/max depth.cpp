/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int max = 0;
    int maxDepth(TreeNode* root) {
        recurse(root,0);
        return max;
    }
    void recurse(TreeNode* root,int level)
    {
        if(root != NULL )
        {
            recurse(root->left, level+1);
            recurse(root->right,level+1);
        }
        else
        {
            if(level > max){
                max = level;
            }
        }
    }
};