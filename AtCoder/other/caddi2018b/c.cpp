#include <bits/stdc++.h>
using namespace std;
typedef long int64;

/**
 * 素因数分解を行う
 **/
map<int64, int64> get_prime_factors_list(int64 N)
{
    map<int64, int64> m;
    for (int64 i = 2; i * i <= N; i++)
    {
        if (N % i != 0)
            continue;
        while (N % i == 0)
        {
            m[i]++;
            N /= i;
        }
    }
    if (N > 1)
        m[N] = 1;
    return m;
}

int main()
{
    int64 N, P;
    cin >> N >> P;
    map<int64, int64> ret;

    ret = get_prime_factors_list(P);
    int64 ans = 1;
    for (auto it = ret.begin(); it != ret.end(); it++)
    {
        ans *= pow(it->first, it->second / N);
    }
    cout << ans << endl;
}
