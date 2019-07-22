class MyHashSet {
public:
    /** Initialize your data structure here. */
    MyHashSet() {
        return vector<int();
    }
    
    void add(int key) {
        this.push_back(key);
    }
    
    void remove(int key) {
        for(int i = 0; i < this.length; i++)
        {
            if(this[i] == key)
            {
                this.remove(i);
            }
        }
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        for(int i = 0; i < this.length; i++)
        {
            if(this[i] == key)
            {
                return true;
            }
        }
        return false; 
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */