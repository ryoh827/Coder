#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> A(3);
    for(int i = 0; i < 3; i++) {
        cin >> A[i];
    }
    cout << *max_element(A.begin(), A.end()) - *min_element(A.begin(), A.end()) << endl;
}
