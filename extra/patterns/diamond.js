export default function diamond(n) {
    let star = "",
        space = "";
    let i, j, k;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            space += " ";
        }

        for (let k = 1; k <= i; k++) {
            star += "* ";
        }
        console.log(space + star);
        space = "";
        star = "";
    }
    for (i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            space += " ";
        }
        for (k = 0; k < n - i; k++) {
            star += "* ";
        }
        console.log(space + star);
        space = "";
        star = "";
    }
}
