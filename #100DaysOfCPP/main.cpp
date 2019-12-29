//
//  main.cpp
//  #100DaysOfCPP
//
//  Created by Emerson on 28/12/19.
//  Copyright © 2019 Emerson. All rights reserved.
//

#include <iostream>
//using std::cout;
//using std::endl;

using namespace std;

void numbers (){
    
    int array[] = {1,2,3,4,5,6};
    cout << array[0] << endl;
}

int main(int argc, const char * argv[]) {
    numbers();
    string name;
    // insert code here...
    cout << "Hello, World!" << endl;
//    cin >> name;
    getline(cin, name);
    std::cout << __cplusplus << endl;
    cout << name << endl;
    return 0;
}
