#include <bits/stdc++.h>
using namespace std;

int main() {
    int N, M, X, Y;
    cin >> N >> M >> X >> Y;
    if (X > Y) {
        cout << "War" << endl;
        return 0;
    }
    vector<int> x(N);
    vector<int> y(M);
    for (int i = 0; i < N; i++) {
        cin >> x[i];
    }
    for (int i = 0; i < M; i++) {
        cin >> y[i];
    }
    int min = *max_element(x.begin(), x.end());
    int max = *min_element(y.begin(), y.end());
    if (min < max && X < min && max <= Y) {
        cout << "No War" << endl;
    } else {
        cout << "War" << endl;
    }
}

