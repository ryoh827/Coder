#include <iostream>
#include <string>
#include <complex>
using namespace std;

int main() {
    string a, b;
    int c;
    cin >> a >> b;
    c = stoi(a + b);
    int sq = floor(sqrt(c));
    cout << (sq * sq == c ? "Yes" : "No") << endl;
    return 0;
}