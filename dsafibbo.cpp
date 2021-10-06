
#include<iostream.h>
#include<math.h>
using namespace std;
int getfabonacci(int n,int x,int a[]){
    if(x==n){
        return (a[n - 1] );
    }
    else if(x<n){
        return (a[x - 1] );
    }else{
        int b[2];
        for (int i = 0; i < x;i++){
            if(i<n)
                b[i] = a[i];
                else
                    b[i] = a[i - 1] + a[i - 2];
        }

        return a[x - 1];
    }
}
int main(){
    int n = 2, x = 4;
    int a[2];
    for (int i = 0; i < n;i++){
        cin >> a[i];
    }
   int p= getfabonacci(n, x, a);
   cout << p;
   return 0;
}
