int kth_smallest(vector<int> numbers, int rank) {
    vector<int>nums1 = numbers;
    sort(nums1.begin(),nums1.end());
    return nums1[rank-1];
}