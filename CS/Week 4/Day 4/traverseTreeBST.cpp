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
    bool res = true;
    bool isSameTree(TreeNode* p, TreeNode* q) {
        recurse(p,q);
        return res;
        
    }
    void recurse(TreeNode* p, TreeNode* q){
        if(!(p == NULL && q ==NULL || p != NULL && q != NULL && p->val == q->val))
        {
            res = false;
        }
        else if(p != NULL && q != NULL)
        {
            recurse(p->left,q->left);
            recurse(p->right,q->right);
        }
    }
};