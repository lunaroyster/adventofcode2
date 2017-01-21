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
    for (int i = 0; i<533; i++){
        int n[9];
        for (int j = 0; j<3; j++) {
            std::cin >> n[(3*j)] >> n[(3*j)+1] >> n[(3*j)+2]; cin.ignore();
            // if(isTriangle(a,b,c)) {
            //     triangleCount++;
            // }
        }
        for (int k = 0; k<3; k++) {
            if(isTriangle(n[k], n[k+3], n[k+6])) {
                triangleCount++;
            }
        }
    }
    std::cout << triangleCount << std::endl;
}
