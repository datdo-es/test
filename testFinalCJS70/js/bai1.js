let n = [2, 3, -5, -2, 4];
let max = -1000;
for (let i = 0; i < n.length; i ++) {
    for (let j = i + 1; j < i + 2; j++){
        if (n[i] * n[j] > max) max = n[i] * n[j];
    }
}
console.log("So lon nhat co tich bang "+ max); 