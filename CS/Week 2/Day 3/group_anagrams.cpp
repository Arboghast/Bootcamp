
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        //unordered_map<string,string> map;
        vector<vector<string>> res;
        for(int i =0; i<strs.size();i++)
        {
            string x= strs[i];
            sort(x.begin(),x.end());
            //map.insert(make_pair(x,strs[i]));
            vector<vector<string>>::iterator pos = find(res.begin(), res.end(), x);
            if(pos != res.end()) {
                res[pos-res.begin()].push_back(strs[i]);
            } else {
                vector<string> ins;
                ins.push_back(strs[i]);
                res.push_back(ins);
            }
        }
        return res;
    }
};