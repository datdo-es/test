const arr=[{
    name: 'MrA',
    weight: 60
},{
    name: 'Mr B',
    weight: 40
},
{
    name: 'Mr C',
    weight: 30
},
{
    name: 'Mr E',
    weight: 70
},
{
    name: 'Mr D',
    weight: 60
},
];
let team1=0;
let team2=0;
for (i=0; i<arr.length;i++){
    if(i%2==0)team1+=arr[i].weight
    else team2+=arr[i].weight
}     
console.log("Team 1 tổng cân nặng là "+team1+" kg")
console.log("Team 1 tổng cân nặng là "+team2+" kg")
