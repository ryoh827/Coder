#include <bits/stdc++.h>
using namespace std;

// TLE
int main()
{
    int N, Q;
    cin >> N >> Q;
    int l[Q], r[Q];
    string ans = string(N, '0');
    for (int i = 0; i < Q; i++)
    {
        cin >> l[i] >> r[i];
        string t = ans.substr(l[i] - 1, r[i] - l[i] + 1);
        string _ans = ans.substr(0, l[i] - 1);
        for (char c : t)
        {
            if (c == '1')
            {
                _ans += '0';
            }
            else
            {
                _ans += '1';
            }
        }
        if (N != r[i])
        {
            _ans += ans.substr(r[i], N - r[i]);
        }
        ans = _ans;
    }
    cout << ans << endl;
}
