class RecentCounter {
public:
    int start= 0;
    int end=0;
    vector<int> counter; 
    RecentCounter() {
        counter = vector<int>(0);
    }
    
    int ping(int t) {
        if(counter.size() != 0)
        {
            end++;//bugged 
        }
        counter.push_back(t);
        while(counter[end]-counter[start] > 3000){
            start++;
        }
        return end-start+1;
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */