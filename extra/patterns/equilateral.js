function equil(n){
    console.log('Print a diamond with rows', n);
    let s='',p ='';
    for(let i = 1;i <= n;i++){
         s = '';
        for(let j = 1;j <= n-i;j++){
            s += " ";
        }
        p = '';
        for(let k = 1; k <= i;k++ )
           {p += '* ';}
        console.log(s+p);   
    }
}
equil(5);
equil(3);
equil(9);