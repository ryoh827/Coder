#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    int n;
    cin >> n;
    int ans = 0;
    for(int i = 1; i <= n; i += 2) {
        int cnt = 0;
        for(int j = 2; j < i; j++) {
            if (i % j == 0) {
                cnt++;
            }
        }
        if (cnt == 6) {
            ans++;
        }
    }
    cout << ans << endl;
    return 0;
}