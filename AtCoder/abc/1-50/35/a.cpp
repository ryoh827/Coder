#include <bits/stdc++.h>
using namespace std;

int main()
{
    int W, H;
    cin >> W >> H;
    if (4 * H == 3 * W)
    {
        cout << "4:3" << endl;
    }
    else
    {
        cout << "16:9" << endl;
    }
}
