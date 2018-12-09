#include <bits/stdc++.h>

using namespace std;

int main() {
    int N;
    cin >> N;
    for(int i = 0; i < 100; i++) {
        int t = N - 4 * i;
        if (t >= 0 && t % 7 == 0) {
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
    return 0;
}
