#include <bits/stdc++.h>
using namespace std;

int gcd(int a, int b)
{
    if (a < b)
        swap(a, b);
    int mod = a % b;
    while (mod != 0)
    {
        a = b;
        b = mod;
        mod = a % b;
    }
    return b;
}

int main()
{
    int N;
    cin >> N;
    int x[N + 1];
    for (int i = 0; i <= N; i++)
    {
        cin >> x[i];
    }
    int ans = abs(x[0] - x[1]);
    for (int i = 1; i < N; i++)
    {
        ans = gcd(ans, abs(x[i] - x[i + 1]));
    }
    cout << ans << endl;
}
