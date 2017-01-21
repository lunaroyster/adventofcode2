#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int largestOfThree(int a, int b, int c) {
    int l = a;
    if (b>l) {l = b;}
    if (c>l) {l = c;}
    return(l);
}

bool isTriangle(int a, int b, int c) {
    int l = largestOfThree(a, b ,c);
    if((a+b+c-l) > l) {
        return(true);
    }
    else {
        return(false);
    }
}

int main() {
    int triangleCount = 0;
    for (int i = 0; i<1599; i++){
        int a, b, c;
        std::cin >> a >> b >> c; cin.ignore();
        if(isTriangle(a,b,c)) {
            triangleCount++;
        }
    }
    std::cout << triangleCount << std::endl;
}
