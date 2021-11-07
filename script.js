//Bài 1 - Đảo ngược thông tin 

// let str_input = "program";
// let reverse_str = '';

// for (let i= str_input.length -1; i >= 0; i--){
//   reverse_str += str_input[i];
// }
// console.log(reverse_str);

//Bài 2 - In hoa dữ liệu
// prompt('Hãy nhập chuôi = ')
// let arr =  'hãy nhập chuôi';
// var strArr= arr.split(" ");
// for(var i=0;i<strArr.length;i++){
//     var charArr=strArr[i].split("");
//     charArr[0]=charArr[0].toUpperCase();
//     strArr[i]=charArr.join("");;	    
// }
// console.log(strArr);

//Bài 3 - Xóa mảng trùng
// let arr=["one","two","three","one","one","four","five","four","five","five"]
// let newArr=[];
// for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

//Bài 4 - 
const staff = [{
      name: "Đỗ Văn A",
      age: 25,
      salary: 700,
      pos: "Quản lý"
  },
  {
      name: "Đỗ Văn B",
      age: 26,
      salary: 500,
      pos: "Nhân viên thời vụ"
  },
  {
      name: "Đỗ Văn C",
      age: 22,
      salary: 500,
      pos: "Nhân viên tạp vụ"
  },
  {
      name: "Đỗ Văn D",
      age: 23,
      salary: 500,
      pos: "Nhân viên Kỹ thuật"
  },
];
// console.log("Thông tin toàn bộ nhân viên gồm: ")
// for (i of staff){
//       console.log("Tên nhân viên: "+ i.name)
//       console.log("Tuổi: "+ i.age)
//       console.log("Lương : "+ i.salary)
//       console.log("Chức vụ: "+ i.pos)
// }

///Thêm mới 1 nhân viên,

// let input={
//       name : prompt('Hãy nhập tên = '),
//       age : parseInt(prompt('Hãy nhập tuổi = ')),
//       salary : parseInt(prompt('Hãy nhập lương = ')),
//       pos: prompt('Chức vụ nhân viên = '),
//   }
// staff.push(input) 
// console.log("Thông tin toàn bộ nhân viên gồm: ")
// for (i of staff){
//       console.log("Tên nhân viên: "+ i.name)
//       console.log("Tuổi: "+ i.age)
//       console.log("Lương : "+ i.salary)
//       console.log("Chức vụ: "+ i.pos)
// }

//Xóa 1 nhân viên theo tìm kiếm
// let find =[{
//     name: "Đỗ Văn D",
// }]
// for(i=0; i<staff.length; i++){
//     if (staff[i].name==find[0].name){  
//         staff.splice(i, 1);
//         break;
//     }
// }
// for (i of staff){
//       console.log("Tên nhân viên: "+ i.name)
//       console.log("Tuổi: "+ i.age)
//       console.log("Lương : "+ i.salary)
//       console.log("Chức vụ: "+ i.pos)
// }

//sửa 1 nhân viên theo tìm kiếm
let find ={
    name: "Đỗ Văn D",
    age: 24,
    salary: 900,
    pos: "Nhân viên Kỹ thuật"
}
for(i=0; i < staff.length; i++){
    if (staff[i]=find[0]){  
        staff[i].name = find.name ;
        staff[i].age = find.age ;
        staff[i].salary = find.salary ;
        staff[i].pos = find.pos ;
        break;
    }
}
for (i of staff){
      console.log("Tên nhân viên: "+ i.name)
      console.log("Tuổi: "+ i.age)
      console.log("Lương : "+ i.salary)
      console.log("Chức vụ: "+ i.pos)
}


// let KiemTraNam;//kiểm tra năm
// let KiemTraThang;//Kiểm tra Tháng
// let KiemTraNgay;//kiểm tra ngày

// let input=prompt('Hãy nhập ngày tháng = ');
// var strArr= input.split("/");
// for(var i=0;i<strArr.length;i++){
//     var charArr=strArr[i].split("/");
//     strArr[i]=charArr.join("");;	    
// }
// // ép biến
// let year=strArr[2]
// let month=strArr[1]
// let day=strArr[0]

// //kiểm tra năm

// // console.log(strArr);

// console.log("Tên nhân viên: "+ charArr)
// if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
//  console.log(" la nam nhuan.") ;
// } else{
//  console.log(" Không la nam nhuan.") ;
// }
// // var input = prompt("Input year: ");
// // leapYear(input);



