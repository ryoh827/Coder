#include <iostream>
#include <string>
using namespace std;

int main() {
    int A, B;
    cin >> A >> B;
    string ans;
    if ((A * B) % 2 == 1) {
        ans = "Yes";
    } else {
        ans = "No";
    }
    cout << ans << endl;
    return 0;
}
