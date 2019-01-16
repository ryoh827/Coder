#include <bits/stdc++.h>
using namespace std;

int main() {
    string S;
    cin >> S;
    if (S[0] != 'A') {
        cout << "WA" << endl;
        return 0;
    }
    if (count(S.begin() + 2, S.end() - 1, 'C') != 1) {
        cout << "WA" << endl;
        return 0;
    }
    for(char c : S) {
        if (c != 'A' && c != 'C' && isupper(c)) {
            cout << "WA" << endl;
            return 0;
        }
    }
    cout << "AC" << endl;
    return 0;
}
