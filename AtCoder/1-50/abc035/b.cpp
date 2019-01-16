#include <bits/stdc++.h>
using namespace std;

int main()
{
    string S;
    int T;
    cin >> S >> T;
    int x = 0;
    int y = 0;
    int un = 0;
    for (char c : S)
    {
        if (c == 'L')
        {
            x--;
        }
        else if (c == 'R')
        {
            x++;
        }
        else if (c == 'U')
        {
            y++;
        }
        else if (c == 'D')
        {
            y--;
        }
        else if (c == '?')
        {
            un++;
        }
    }
    if (T == 1)
    {
        cout << abs(x) + abs(y) + un << endl;
    }
    else
    {
        int t = abs(x) + abs(y);
        if (t >= un)
        {
            cout << t - un << endl;
        }
        else
        {
            int dt = un - t;
            cout << dt % 2 << endl;
        }
    }
}
