#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;
    string ans;
    if (N / 100 >= N % 10 && N / 100 >= N % 100) {
         ans = string(3, to_string(N / 100)[0]);
    } else {
        ans = string(3, to_string(N / 100 + 1)[0]);
    }
    cout << ans << endl;
}

