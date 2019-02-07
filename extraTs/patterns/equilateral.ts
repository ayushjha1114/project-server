export default function equilateral(n: number): void {
    console.log('Print a diamond with rows', n);
    // tslint:disable-next-line:one-variable-per-declaration
    let space: string = '',
        pattern: string = '',
        i: number,
        j: number,
        k: number;
    for (i = 1; i <= n; i++) {
        space = '';
        for (j = 1; j <= n - i; j++) {
            space += ' ';
        }
        pattern = '';
        for (k = 1; k <= i; k++) {
            pattern += '* ';
        }
        console.log(space + pattern);
    }
}
