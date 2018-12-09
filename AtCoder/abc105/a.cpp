#include <bits/stdc++.h>

using namespace std;

int main() {
    int N, K;
    cin >> N >> K;
    string ans = "0";
    if ((N % K != 0)) {
        ans = "1";
    }
    cout << ans << endl;
    return 0;
}
