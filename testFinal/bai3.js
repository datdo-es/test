const arr=[{
    name: 'Màu xanh ',
    color: '33FF36'
},{
    name: 'Xanh dương',
    color: '226ADA'
},
{
    name: 'Tím mộng mơ',
    color: 'A316EF'
},
{
    name: 'Hồng ngất ngây',
    color: 'EF16BE'
},
{
    name: 'Đỏ rực cháy',
    color: 'EF1620'
},
];
const button = document.querySelector('.btn-random');

button.addEventListener('click',changeColor);

function changeColor(){
    const background = document.querySelector('.background-default');
    const arrayColor = ['#EF1620','#EF16BE','#226ADA','#A316EF','#33FF36','orange','blue'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    console.log(random);
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}



const sortedContainer = document.querySelector(".changeColor");
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const divContainer = document.createElement("tr");
        sortedContainer.appendChild(divContainer);
        divContainer.innerHTML = `
        <td>${element.name}</td>
        <td>#${element.color}</td>
        <td><a href="#" class="buttonStyle btn-2">Thử nghiệm</a></td>  
        `;
    }
;
