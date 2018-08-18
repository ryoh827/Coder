#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    int k;
    cin >> s >> k;
    for (int i = 0; i < s.length(); i++) {
        if (s[i] != '1' || i == k - 1) {
            cout << s[i] << endl;
            break;
        }
    }
    return 0;
}