#include <iostream>
#include <string>
using namespace std;

int main() {
    int K;
    cin >> K;
    int a = 0;
    for(int i = 2; i <= K; i += 2) {
        for(int j = 1; j <= K; j += 2) {
            a++;
        }
    }
    cout << a << endl;
    return 0;
}
