#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int N, T;
    cin >> N >> T;
    vector<int> c(N), t(N);
    for(int i = 0; i < N; i++) {
        cin >> c[i] >> t[i];
    } 
    int MIN = 1 << 30; //INF
    for(int i = 0; i < N; i++) {
        if (T >= t[i]) {
            MIN = min(MIN, c[i]);
        }
    }
    if (MIN == 1 << 30) {
        cout << "TLE" << endl;
    } else {
        cout << MIN << endl;
    }
    return 0;
}
