class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1;
        unordered_set<int> set2;
        vector<int> small;
        vector<int> big;
        if(nums1.size() < nums2.size())
        {
            small = nums1;
            big = nums2;
        }
        else
        {
            small = nums1;
            big = nums2;
        }
        
        for(int i = 0; i < small.size(); i++)
        {
            set1.insert(small[i]);
        }
        for(int i = 0; i < big.size();i++)
        {
            set2.insert(big[i]);
        }
        
        vector<int> res;
        unordered_set<int>::iterator it;
        for(it = set1.begin(); it!=set1.end(); it++)
        {   
            
            if(set2.count(*it) > 0 )
            {
                res.push_back(*it);
            }
        }
        return res;
    }
};