#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;
    vector<int> x(N), y(N), h(N);
    for(int i = 0; i < N; i++) {
        cin >> x[i] >> y[i] >> h[i];
    }
    for(int i = 0; i < 101; i++) {
        for (int j = 0; j < 101; j++) {
            int needH = -1;
            for(int k = 0; k < N; k++) {
                if (h[k] > 0) {
                    int tmp = h[k] + abs(i - y[k]) + abs(j - x[k]);
                    if (needH == -1) {
                        needH = tmp;
                    } else {
                        if (needH != tmp) {
                            needH = -2;
                            break;
                        }
                    }
                }
            }
            if (needH == -2) continue;
            for (int k = 0; k < N; k++) {
                if (h[k] == 0) {
                    int dist = abs(i - y[k]) + abs(j - x[k]);
                    if (needH > dist) {
                        needH = -2;
                        break;
                    }
                }
            }
            if (needH == -2) continue;

            cout << j << ' ' << i << ' ' << needH << endl;
            return 0;
        }
    }
}
