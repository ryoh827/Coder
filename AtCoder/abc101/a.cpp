#include <bits/stdc++.h>
using namespace std;

int main() {
    string S;
    cin >> S;
    int ans = 0;
    for(char c : S) {
        if (c == '+') {
            ans++;
        } else {
            ans--;
        }
    }
    cout << ans << endl;
}
