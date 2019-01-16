#include <iostream>
#include <string>
#include <cmath>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    string ans = "";
    for(int i = 0; i < 3; i++) {
        int m = n % 10;
        if (m == 9) {
            ans += '1';
        } else {
            ans += '9';
        }
        n = n / 10;
    }
    reverse(ans.begin(), ans.end());
    cout << ans << endl;
    return 0;
}
