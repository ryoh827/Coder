#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin >> s;
    string ans = "";
    for (char c : s)
    {
        if (c == 'B')
        {
            ans = ans.substr(0, ans.size() - 1);
        }
        else
        {
            ans += c;
        }
    }
    cout << ans << endl;
}
