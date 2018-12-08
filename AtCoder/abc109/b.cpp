#include <iostream>
#include <string>
#include <set>
using namespace std;

int main() {
    int N;
    cin >> N;
    set<string> s;
    int last = -1;
    for(int i = 0; i < N; i++) {
        string str;
        cin >> str;
        if (last == -1 || last == str[0]) {
            last = str.back();
            if (s.count(str)) {
                cout << "No" << endl;
                return 0;
            }
            s.emplace(str);
        } else {
            cout << "No" << endl;
            return 0;
        }
    }    
    cout << "Yes" << endl;
    return 0;
}
