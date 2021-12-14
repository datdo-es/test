
var arr = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
var maxLength = 0
for(let i = 0; i < arr.length; i++) {
  if(arr[i].length >= maxLength) {
      longest = arr[i].length;
  }
}
for (i of arr){
    if (maxLength== i){
        console.log("Thông tin người tên dài nhất là "+ i);
    }
}

var plorp = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
var longest = plorp.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest);