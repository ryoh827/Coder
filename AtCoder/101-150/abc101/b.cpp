#include <bits/stdc++.h>
using namespace std;

int main() {
    int N, n;
    cin >> N;
    n = N;
    int Sn = 0;
    while(n != 0) {
        Sn += n % 10;
        n = n / 10;
    }
    if (N % Sn == 0) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }
}
