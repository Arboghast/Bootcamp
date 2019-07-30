vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        unordered_set<TreeNode*> doup;
        vector<TreeNode*> res;
        if(root != NULL){
            recursiveCall(root,doup,res);
        }
        return res;
    }
    
    void recursiveCall(TreeNode* root, unordered_set<TreeNode*>& doup, vector<TreeNode*>& res){
        if(doup.count(root) == 1)
        {
            res.push_back(root);
        }
        
        doup.insert(root);
        if(root->left != NULL)
        {
            recursiveCall(root->left,doup,res);
        }
        if(root->right != NULL)
        {
            recursiveCall(root->right,doup,res);
        }
    }