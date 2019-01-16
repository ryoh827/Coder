#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> E(100001);
    vector<int> O(100001);

    for(int i = 0; i < n; i++) {
        int t;
        cin >> t;
        if (i % 2 == 0) {
            E[t]++;
        } else {
            O[t]++;
        }
    }
    int emax, omax;
    vector<int>::iterator iter = max_element(E.begin(), E.end());
    emax = distance(E.begin(), iter);
    iter = max_element(O.begin(), O.end());
    omax = distance(O.begin(), iter);
    sort(E.begin(), E.end(), std::greater<int>() );
    sort(O.begin(), O.end(), std::greater<int>() );
    if (emax == omax) {
        int m = max(E[0] + O[1], E[1] + O[0]);
        cout << n - m << endl;
    } else {
        cout << n - (E[0] + O[0]) << endl;
    }
}
