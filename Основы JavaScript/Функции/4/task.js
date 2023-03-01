function pow(x, n){
    let res = 1;
    for (let i = 1; i <= n; i++){
        res = res * x;
    }
    return res;
}