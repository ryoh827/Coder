#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
    int n;
    map<string, bool> map;
    cin >> n;
    string s;
    for(int i = 0; i < n; i++) {
        cin >> s;
        map[s] = true;
    }
    int size = map.size();
    if (size == 4) {
        cout << "Four" << endl;
    } else if (size == 3) {
        cout << "Three" << endl;
    }
    return 0;
}