#include <iostream>
using namespace std;

int findMissing(int n){
  int index = 0;
  int end = n;
  int midpoint = 0;

  while(arr[index+1] != arr[end]){
    midpoint = (index+end)/2;
    if(arr[midpoint] = midpoint){
      index= midpoint;
    }
    else
    {
      end = midpoint;
    }
  }
  return arr[index]+1;
}

int main() {

}