#include <iostream>
#include <string>
using namespace std;

int main() {
    int x, a, b;
    int m;
    cin >> x >> a >> b;
    x -= a;
    m = x % b;
    cout << m << endl;
    return 0;
}