#include <bits/stdc++.h>
using namespace std;

int main()
{
    int A, B, C;
    cin >> A >> B >> C;
    bool f = false;
    if (A == 5)
    {
        if ((B == 5 && C == 7) || (B == 7 && C == 5))
        {
            f = true;
        }
    }
    else if (A == 7)
    {
        if (B == 5 && B == C)
        {
            f = true;
        }
    }
    cout << (f ? "YES" : "NO") << endl;
}
