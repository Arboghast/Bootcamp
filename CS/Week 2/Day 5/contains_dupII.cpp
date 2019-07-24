class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int,vector<int>> map1;
        for(int i = 0; i< nums.size(); i++)
        {
            if(map1.count(nums[i]))
            {
                if(map1[nums[i]].count != 0)
                {
                    for(int j = 0; j < map1[nums[i]].size(); j++)
                    {
                        if(i == j && -1*k <= i-j && i-j <= k)
                        {
                            return true;
                        }
                    }
                }
                map1[nums[i]].push_back(i);
            }
            else
            {
                vector<int> x;
                x.push_back(i);
                map1[nums[i]] = x; 
            }
        }
};