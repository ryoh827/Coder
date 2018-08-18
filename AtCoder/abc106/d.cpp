#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, m, Q;
    cin >> n >> m >> Q;
    vector<pair<int, int> > list(m);
    int L, R;
    for(int i = 0; i < m; i++) {
        cin >> L >> R;
        list[i] = make_pair(L, R);
    }
    sort(list.begin(), list.end());
    int p, q;
    int ans[Q];
    for (int i = 0; i < Q; i++) {
        cin >> p >> q;
        ans[i] = 0;
        for(int j = 0; j < m; j++) {
            if (p <= list[j].first && list[j].second <= q) {
                ans[i]++;
            }
        }
    }
    for(int i = 0; i < Q; i++) {
        cout << ans[i] << endl;
    }
    return 0;
}